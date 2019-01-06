import { Injectable } from '@angular/core';

export interface Schema {
  name: string;
  indexes?: string[];
  seeds?: string[];
}

export interface DbOject {
  id: number;
  data: any;
}

@Injectable()
export class IndexedDbService {
  private _indexedDB: IDBFactory;

  private dbName = 'staff.com';
  private version = 2;

  private schemas: Schema[] = [
    { name: 'worklog' }
  ];

  constructor() {
    this._indexedDB = indexedDB;
  }

  setName(dbName: string): void {
    if (dbName.length > 0 && dbName !== undefined) {
      this.dbName = dbName;
    } else {
      console.log('Error: wrong dbName');
    }
  }

  put(source: string, object: DbOject): Promise<any> {
    const self = this;

    return new Promise((resolve, reject) => {
      this.open().then((db) => {
        const tx = db.transaction(source, 'readwrite');
        const store = tx.objectStore(source);
        store.put(object);

        tx.oncomplete = () => {
          db.close();
          resolve(object);
        };
        db.onerror = (e: any) => {
          db.close();
          const error = self.handleError('IndexedDB error: ' + e.target.errorCode);
          reject(error);
        };
      });
    });
  }

  post(source: string, object: any): Promise<any> {
    const self = this;

    return new Promise((resolve, reject) => {
      this.open().then((db) => {
        const tx = db.transaction(source, 'readwrite');
        const store = tx.objectStore(source);
        const request = store.add({ data: object });

        request.onsuccess = (e: any) => {
          db.close();
          resolve(e.target.result);
        };
        db.onerror = (e: any) => {
          db.close();
          const error = self.handleError('IndexedDB error: ' + e.target.errorCode);
          reject(error);
        };
      });
    });
  }

  get(source: string, id: number): Promise<DbOject> {
    const self = this;

    return new Promise((resolve, reject) => {
      this.open().then((db) => {
        const tx = db.transaction(source, 'readonly');
        const store = tx.objectStore(source);
        const index = store.index('id_idx');
        const request = index.get(id);

        request.onsuccess = () => {
          db.close();
          resolve(request.result);
        };
        db.onerror = (e: any) => {
          db.close();
          const error = self.handleError('IndexedDB error: ' + e.target.errorCode);
          reject(error);
        };
      });
    });
  }

  all(source: string): Promise<DbOject[]> {
    const self = this;

    return new Promise((resolve, reject) => {
      const indexName = 'id_idx';

      this.open().then((db) => {
        const tx = db.transaction(source, 'readonly');
        const store = tx.objectStore(source);
        const index = store.index(indexName);
        const request = index.openCursor(); // IDBKeyRange.only("Fred")
        const results: any[] = [];

        request.onsuccess = function () {
          const cursor = request.result;
          if (cursor) {
            results.push(cursor.value);
            cursor.continue();
          } else {
            db.close();
            resolve(results);
          }
        };
        db.onerror = (e: any) => {
          db.close();
          const error = self.handleError('IndexedDB error: ' + e.target.errorCode);
          reject(error);
        };
      });
    });
  }

  remove(source: string, id: number): Promise<any> {
    const self = this;

    return new Promise((resolve, reject) => {
      this.open().then((db) => {
        const tx = db.transaction(source, 'readwrite');
        const store = tx.objectStore(source);

        store.delete(id);

        tx.oncomplete = () => {
          db.close();
          resolve(id);
        };
        db.onerror = (e: any) => {
          db.close();
          const error = self.handleError('IndexedDB error: ' + e.target.errorCode);
          reject(error);
        };
      });
    });
  }

  count(source: string): Promise<number> {
    const self = this;

    return new Promise((resolve, reject) => {
      this.open().then((db) => {
        const indexName = 'id_idx';
        const tx = db.transaction(source, 'readonly');
        const store = tx.objectStore(source);
        const index = store.index(indexName);
        const request = index.count();

        request.onsuccess = () => {
          db.close();
          resolve(request.result);
        };
        db.onerror = (e: any) => {
          db.close();
          const error = self.handleError('IndexedDB error: ' + e.target.errorCode);
          reject(error);
        };
      });
    });
  }

  clear(): Promise<any> {
    const self = this;

    return new Promise((resolve, reject) => {
      const request = this._indexedDB.deleteDatabase(this.dbName);

      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        const error = self.handleError('Could not delete indexed db.');
        reject(error);
      };
      request.onblocked = () => {
        const error = self.handleError('Couldn not delete database due to the operation being blocked.');
        reject(error);
      };
    });
  }

  private handleError(msg: string) {
    console.error(msg);
    return new Error(msg);
  }

  private open(): Promise<IDBDatabase> {
    const self = this;

    return new Promise((resolve, reject) => {
      const request = this._indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = () => {
        // The database did not previously exist, so create object stores and indexes.
        const db = request.result;

        for (let i = 0; i < this.schemas.length; i++) {
          const schema = this.schemas[i];
          if (db.objectStoreNames.contains(schema.name)) {
            continue;
          }

          const store = db.createObjectStore(schema.name, { keyPath: 'id', autoIncrement: true });
          store.createIndex('id_idx', 'id', { unique: true });

          if (schema.indexes !== undefined) {
            for (let j = 0; j < schema.indexes.length; j++) {
              const index = schema.indexes[j];
              store.createIndex(`${index}_idx`, index);
            }
          }

          if (schema.seeds !== undefined) {
            for (let j = 0; j < schema.seeds.length; j++) {
              const seed = schema.seeds[j];
              store.put(seed);
            }
          }
        }
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => reject(self.handleError(request.error.message));
    });
  }
}
