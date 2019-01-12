import { Component, OnInit } from '@angular/core';
import { KeyboardLayout } from '~/models';
import myLayout from '../../../keyboard-layouts/my-layout.json';

@Component({
  selector: 'app-keyboard-view',
  templateUrl: './keyboard-view.component.html',
  styleUrls: ['./keyboard-view.component.scss']
})
export class KeyboardViewComponent implements OnInit {
  layout: KeyboardLayout;

  constructor() {
    this.layout = myLayout as any;
  }

  ngOnInit() {
  }
}
