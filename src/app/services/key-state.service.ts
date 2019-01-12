import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Key, KeyCombination } from '~/models';

@Injectable()
export class KeyStateService {
  private downKeys: Key[] = [];
  private keysSubject = new Subject<KeyCombination>();

  public get keys() {
    return this.keysSubject.asObservable();
  }

  public keyDown(key: Key) {
    const ind = this.downKeys.findIndex(x => x.code === key.code);
    if (ind >= 0) {
      return;
    }

    this.downKeys.push(key);
    this.fireChange();
  }

  public keyUp(key: Key) {
    const ind = this.downKeys.findIndex(x => x.code === key.code);
    if (ind >= 0) {
      this.downKeys.splice(ind, 1);
    }
    this.fireChange();
  }

  public keyToggle(key: Key) {
    const ind = this.downKeys.findIndex(x => x.code === key.code);
    if (ind >= 0) {
      this.keyUp(key);
    } else {
      this.keyDown(key);
    }
  }

  public clearKeys() {
    this.downKeys.splice(0, this.downKeys.length);
    this.fireChange();
  }

  private fireChange() {
    this.keysSubject.next({ keys: this.downKeys.map(x => x) });
  }
}
