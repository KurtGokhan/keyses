import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { Key, KeyCombination } from '~/models';
import { KeyStateService } from '~/services/key-state.service';

@Component({
  selector: 'app-key-detect',
  templateUrl: './key-detect.component.html',
  styleUrls: ['./key-detect.component.scss']
})
export class KeyDetectComponent {
  constructor(private keyState: KeyStateService) { }

  @HostListener('window:keydown', ['$event'])
  private onKeyDown(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (event.repeat) {
      return false;
    }

    this.keyState.keyDown(event);
    return false;
  }

  @HostListener('window:keyup', ['$event'])
  private onKeyUp(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.keyState.keyUp(event);
    return false;
  }

  @HostListener('window:blur', ['$event'])
  private clearKeys() {
    this.keyState.clearKeys();
  }
}
