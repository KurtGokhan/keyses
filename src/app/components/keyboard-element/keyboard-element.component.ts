import { Component, OnInit, Input } from '@angular/core';
import { KeyboardElement } from 'src/app/models/keyboard-layout.model';

@Component({
  selector: 'app-keyboard-element',
  templateUrl: './keyboard-element.component.html',
  styleUrls: ['./keyboard-element.component.scss']
})
export class KeyboardElementComponent implements OnInit {
  @Input() element: KeyboardElement;

  constructor() { }

  ngOnInit() {
  }

}
