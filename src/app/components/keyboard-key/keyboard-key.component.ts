import { Component, OnInit, Input } from '@angular/core';
import { KeyboardKey, KeyboardPadding, KeyboardKeyShape } from 'src/app/models/keyboard-layout.model';

@Component({
  selector: 'app-keyboard-key',
  templateUrl: './keyboard-key.component.html',
  styleUrls: ['./keyboard-key.component.scss']
})
export class KeyboardKeyComponent implements OnInit {
  defaultShape: [KeyboardKeyShape] = [{ size: [1, 1] }];
  defaultBevel: KeyboardPadding = [0, 0.1, 0.1, 0.1];

  @Input() key: KeyboardKey;

  constructor() { }

  ngOnInit() {
  }

}
