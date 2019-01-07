import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KeyboardKey, KeyboardKeyShape, KeyboardPadding } from '~/models/keyboard-layout.model';
import { KeyStateService } from '~/services/key-state.service';

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

  beingClicked = false;

  constructor(private keyState: KeyStateService) {
    this.pressed = keyState.keys.pipe(map(keys => !!keys.keys.find(x => x.code === this.key.code)));
  }

  ngOnInit() {
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.button === 0) {
      this.keyState.keyDown({ code: this.key.code } as any);
      this.beingClicked = true;
    }
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (event.button === 0 && this.beingClicked) {
      this.keyState.keyUp({ code: this.key.code } as any);
      this.beingClicked = false;
    }
  }

  @HostListener('contextmenu', ['$event'])
  onclick(event: MouseEvent) {
    if (event.button === 2) {
      this.keyState.keyToggle({ code: this.key.code } as any);

      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }
}
