import { Component, Input, OnInit } from '@angular/core';
import { KeyboardLayout } from 'src/app/models/keyboard-layout.model';

@Component({
  selector: 'app-keyboard-view',
  templateUrl: './keyboard-view.component.html',
  styleUrls: ['./keyboard-view.component.scss']
})
export class KeyboardViewComponent implements OnInit {
  layout: KeyboardLayout;

  constructor() {
    this.layout = {
      rows: [
        {
          padding: [0.2, 0],
          height: 0.7,
          elements: [
            { type: 'key', labels: [{ content: 'Esc', position: 'middle left' }], codes: [{ code: 27 }] },
            { size: 1 },
            { type: 'key', labels: [{ content: 'F1', position: 'middle left' }], codes: [{ code: 112 }] },
            { type: 'key', labels: [{ content: 'F2', position: 'middle left' }], codes: [{ code: 113 }] },
            { type: 'key', labels: [{ content: 'F3', position: 'middle left' }], codes: [{ code: 114 }] },
            { type: 'key', labels: [{ content: 'F4', position: 'middle left' }], codes: [{ code: 115 }] },
            { size: 0.5 },
            { type: 'key', labels: [{ content: 'F5', position: 'middle left' }], codes: [{ code: 116 }] },
            { type: 'key', labels: [{ content: 'F6', position: 'middle left' }], codes: [{ code: 117 }] },
            { type: 'key', labels: [{ content: 'F7', position: 'middle left' }], codes: [{ code: 118 }] },
            { type: 'key', labels: [{ content: 'F8', position: 'middle left' }], codes: [{ code: 119 }] },
            { size: 0.5 },
            { type: 'key', labels: [{ content: 'F9', position: 'middle left' }], codes: [{ code: 120 }] },
            { type: 'key', labels: [{ content: 'F10', position: 'middle left' }], codes: [{ code: 121 }] },
            { type: 'key', labels: [{ content: 'F11', position: 'middle left' }], codes: [{ code: 122 }] },
            { type: 'key', labels: [{ content: 'F12', position: 'middle left' }], codes: [{ code: 123 }] },
          ]
        },
        {
          elements: [
            { type: 'key', labels: [{ content: '"', position: 'bottom left' }], codes: [{ code: 192 }] },
            { type: 'key', labels: [{ content: '1', position: 'bottom left' }], codes: [{ code: 49 }] },
            { type: 'key', labels: [{ content: '2', position: 'bottom left' }], codes: [{ code: 50 }] },
            { type: 'key', labels: [{ content: '3', position: 'bottom left' }], codes: [{ code: 51 }] },
            { type: 'key', labels: [{ content: '4', position: 'bottom left' }], codes: [{ code: 52 }] },
            { type: 'key', labels: [{ content: '5', position: 'bottom left' }], codes: [{ code: 53 }] },
            { type: 'key', labels: [{ content: '6', position: 'bottom left' }], codes: [{ code: 54 }] },
            { type: 'key', labels: [{ content: '7', position: 'bottom left' }], codes: [{ code: 55 }] },
            { type: 'key', labels: [{ content: '8', position: 'bottom left' }], codes: [{ code: 56 }] },
            { type: 'key', labels: [{ content: '9', position: 'bottom left' }], codes: [{ code: 57 }] },
            { type: 'key', labels: [{ content: '0', position: 'bottom left' }], codes: [{ code: 48 }] },
            { type: 'key', labels: [{ content: '*', position: 'bottom left' }], codes: [{ code: 223 }] },
            { type: 'key', labels: [{ content: '-', position: 'bottom left' }], codes: [{ code: 189 }] },
            { type: 'key', labels: [{ content: ',', position: 'bottom left' }], codes: [{ code: 188 }] },
            { type: 'key', labels: [{ content: '<', position: 'middle center' }], codes: [{ code: 8 }] },
          ]
        },
        {
          elements: [
            { type: 'key', labels: [{ content: 'Tab', position: 'middle left' }], codes: [{ code: 9 }], shape: [{ size: [1.5, 1] }] },
            { type: 'key', labels: [{ content: 'Q', position: 'top left' }], codes: [{ code: 81 }] },
            { type: 'key', labels: [{ content: 'W', position: 'top left' }], codes: [{ code: 87 }] },
            { type: 'key', labels: [{ content: 'E', position: 'top left' }], codes: [{ code: 69 }] },
            { type: 'key', labels: [{ content: 'R', position: 'top left' }], codes: [{ code: 82 }] },
            { type: 'key', labels: [{ content: 'T', position: 'top left' }], codes: [{ code: 84 }] },
            { type: 'key', labels: [{ content: 'Y', position: 'top left' }], codes: [{ code: 89 }] },
            { type: 'key', labels: [{ content: 'U', position: 'top left' }], codes: [{ code: 85 }] },
            { type: 'key', labels: [{ content: 'I', position: 'top left' }], codes: [{ code: 73 }] },
            { type: 'key', labels: [{ content: 'O', position: 'top left' }], codes: [{ code: 79 }] },
            { type: 'key', labels: [{ content: 'P', position: 'top left' }], codes: [{ code: 80 }] },
            { type: 'key', labels: [{ content: 'Ğ', position: 'top left' }], codes: [{ code: 219 }] },
            { type: 'key', labels: [{ content: 'Ü', position: 'top left' }], codes: [{ code: 221 }] },
            {
              type: 'key', labels: [{ content: 'Enter', position: [0, 1.5, 0, -0.5] }], codes: [{ code: 13 }],
              shape: [{ size: [1.5, 2] }, { size: [2.25, 1], position: [-0.75, 1] }]
            },
          ]
        },
        {
          elements: [
            {
              type: 'key', labels: [{ content: 'Caps Lock', position: 'middle left' }], codes: [{ code: 20 }],
              shape: [{ size: [1.75, 1] }]
            },
            { type: 'key', labels: [{ content: 'A', position: 'top left' }], codes: [{ code: 65 }] },
            { type: 'key', labels: [{ content: 'S', position: 'top left' }], codes: [{ code: 83 }] },
            { type: 'key', labels: [{ content: 'D', position: 'top left' }], codes: [{ code: 68 }] },
            { type: 'key', labels: [{ content: 'F', position: 'top left' }], codes: [{ code: 70 }] },
            { type: 'key', labels: [{ content: 'G', position: 'top left' }], codes: [{ code: 71 }] },
            { type: 'key', labels: [{ content: 'H', position: 'top left' }], codes: [{ code: 72 }] },
            { type: 'key', labels: [{ content: 'J', position: 'top left' }], codes: [{ code: 74 }] },
            { type: 'key', labels: [{ content: 'K', position: 'top left' }], codes: [{ code: 75 }] },
            { type: 'key', labels: [{ content: 'L', position: 'top left' }], codes: [{ code: 76 }] },
            { type: 'key', labels: [{ content: 'Ş', position: 'top left' }], codes: [{ code: 186 }] },
            { type: 'key', labels: [{ content: 'İ', position: 'top left' }], codes: [{ code: 222 }] },
          ]
        },
        {
          elements: [
            {
              type: 'key', labels: [{ content: 'Shift', position: 'middle left' }], codes: [{ code: 16 }],
              shape: [{ size: [1.25, 1] }]
            },
            { type: 'key', labels: [{ content: '<', position: 'top left' }], codes: [{ code: 226 }] },
            { type: 'key', labels: [{ content: 'Z', position: 'top left' }], codes: [{ code: 90 }] },
            { type: 'key', labels: [{ content: 'X', position: 'top left' }], codes: [{ code: 88 }] },
            { type: 'key', labels: [{ content: 'C', position: 'top left' }], codes: [{ code: 67 }] },
            { type: 'key', labels: [{ content: 'V', position: 'top left' }], codes: [{ code: 86 }] },
            { type: 'key', labels: [{ content: 'B', position: 'top left' }], codes: [{ code: 66 }] },
            { type: 'key', labels: [{ content: 'N', position: 'top left' }], codes: [{ code: 78 }] },
            { type: 'key', labels: [{ content: 'M', position: 'top left' }], codes: [{ code: 77 }] },
            { type: 'key', labels: [{ content: 'Ö', position: 'top left' }], codes: [{ code: 191 }] },
            { type: 'key', labels: [{ content: 'Ç', position: 'top left' }], codes: [{ code: 220 }] },
            { type: 'key', labels: [{ content: '.', position: 'top left' }], codes: [{ code: 190 }] },
            {
              type: 'key', labels: [{ content: 'Shift', position: 'middle left' }], codes: [{ code: 16 }],
              shape: [{ size: [2.75, 1] }]
            },
          ]
        },
        {
          elements: [
            {
              type: 'key', labels: [{ content: 'Ctrl', position: 'middle left' }], codes: [{ code: 17 }],
              shape: [{ size: [1.5, 1] }]
            },
            {
              type: 'key', labels: [{ content: 'Win', position: 'middle left' }], codes: [{ code: 91 }],
              shape: [{ size: [1.25, 1] }]
            },
            {
              type: 'key', labels: [{ content: 'Alt', position: 'middle left' }], codes: [{ code: 18 }],
              shape: [{ size: [1.25, 1] }]
            },
            {
              type: 'key', labels: [], codes: [{ code: 32 }],
              shape: [{ size: [5.75, 1] }]
            },
            {
              type: 'key', labels: [{ content: 'Alt Gr', position: 'middle left' }], codes: [{ code: 18 }],
              shape: [{ size: [1.25, 1] }]
            },
            {
              type: 'key', labels: [{ content: 'Win', position: 'middle left' }], codes: [{ code: 92 }],
              shape: [{ size: [1.25, 1] }]
            },
            {
              type: 'key', labels: [{ content: '', position: 'middle left' }], codes: [{ code: 93 }],
              shape: [{ size: [1.25, 1] }]
            },
            {
              type: 'key', labels: [{ content: 'Ctrl', position: 'middle left' }], codes: [{ code: 17 }],
              shape: [{ size: [1.5, 1] }]
            },
          ]
        }
      ],
    };
  }

  ngOnInit() {
  }

}
