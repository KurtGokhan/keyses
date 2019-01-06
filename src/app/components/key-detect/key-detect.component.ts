import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { Key, KeyCombination } from 'src/app/models/key.model';
import { KeyStateService } from 'src/app/services/key-state.service';

@Component({
  selector: 'app-key-detect',
  templateUrl: './key-detect.component.html',
  styleUrls: ['./key-detect.component.scss']
})
export class KeyDetectComponent {
  constructor(private keyState: KeyStateService) { }

  @HostListener('window:keydown', ['$event'])
  private onKeyDown(event: KeyboardEvent) {
    if (event.repeat) {
      return;
    }

    this.keyState.keyDown(event);
  }

  @HostListener('window:keyup', ['$event'])
  private onKeyUp(event: KeyboardEvent) {
    this.keyState.keyUp(event);
  }

  @HostListener('window:blur', ['$event'])
  private clearKeys() {
    this.keyState.clearKeys();
  }
}
