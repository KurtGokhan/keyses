import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KeyboardKey, KeyboardKeyShape, KeyboardPadding } from 'src/app/models/keyboard-layout.model';
import { KeyStateService } from 'src/app/services/key-state.service';

@Component({
  selector: 'app-keyboard-key',
  templateUrl: './keyboard-key.component.html',
  styleUrls: ['./keyboard-key.component.scss']
})
export class KeyboardKeyComponent implements OnInit {
  defaultShape: [KeyboardKeyShape] = [{ size: [1, 1] }];
  defaultBevel: KeyboardPadding = [0, 0.1, 0.1, 0.1];

  @Input() key: KeyboardKey;

  pressed: Observable<boolean>;

  constructor(keyState: KeyStateService) {
    this.pressed = keyState.keys.pipe(map(keys => !!keys.keys.find(x => x.code === this.key.code)));
  }

  ngOnInit() {
  }

}
