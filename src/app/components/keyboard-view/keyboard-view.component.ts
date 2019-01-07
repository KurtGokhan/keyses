import { Component, OnInit } from '@angular/core';
import { KeyboardLayout } from '~/models/keyboard-layout.model';

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
            { type: 'key', labels: [{ content: 'Esc', position: 'middle left' }], code: 'Escape' },
            { size: 1 },
            { type: 'key', labels: [{ content: 'F1', position: 'middle left' }], code: 'F1' },
            { type: 'key', labels: [{ content: 'F2', position: 'middle left' }], code: 'F2' },
            { type: 'key', labels: [{ content: 'F3', position: 'middle left' }], code: 'F3' },
            { type: 'key', labels: [{ content: 'F4', position: 'middle left' }], code: 'F4' },
            { size: 0.5 },
            { type: 'key', labels: [{ content: 'F5', position: 'middle left' }], code: 'F5' },
            { type: 'key', labels: [{ content: 'F6', position: 'middle left' }], code: 'F6' },
            { type: 'key', labels: [{ content: 'F7', position: 'middle left' }], code: 'F7' },
            { type: 'key', labels: [{ content: 'F8', position: 'middle left' }], code: 'F8' },
            { size: 0.5 },
            { type: 'key', labels: [{ content: 'F9', position: 'middle left' }], code: 'F9' },
            { type: 'key', labels: [{ content: 'F10', position: 'middle left' }], code: 'F10' },
            { type: 'key', labels: [{ content: 'F11', position: 'middle left' }], code: 'F11' },
            { type: 'key', labels: [{ content: 'F12', position: 'middle left' }], code: 'F12' },
          ]
        },
        {
          elements: [
            { type: 'key', labels: [{ content: '"', position: 'bottom left' }], code: 'Backquote' },
            { type: 'key', labels: [{ content: '1', position: 'bottom left' }], code: 'Digit1' },
            { type: 'key', labels: [{ content: '2', position: 'bottom left' }], code: 'Digit2' },
            { type: 'key', labels: [{ content: '3', position: 'bottom left' }], code: 'Digit3' },
            { type: 'key', labels: [{ content: '4', position: 'bottom left' }], code: 'Digit4' },
            { type: 'key', labels: [{ content: '5', position: 'bottom left' }], code: 'Digit5' },
            { type: 'key', labels: [{ content: '6', position: 'bottom left' }], code: 'Digit6' },
            { type: 'key', labels: [{ content: '7', position: 'bottom left' }], code: 'Digit7' },
            { type: 'key', labels: [{ content: '8', position: 'bottom left' }], code: 'Digit8' },
            { type: 'key', labels: [{ content: '9', position: 'bottom left' }], code: 'Digit9' },
            { type: 'key', labels: [{ content: '0', position: 'bottom left' }], code: 'Digit0' },
            { type: 'key', labels: [{ content: '*', position: 'bottom left' }], code: 'Minus' },
            { type: 'key', labels: [{ content: '-', position: 'bottom left' }], code: 'Equal' },
            { type: 'key', labels: [{ content: ',', position: 'bottom left' }], code: 'Backslash' },
            { type: 'key', labels: [{ content: '<', position: 'middle center' }], code: 'Backspace' },
          ]
        },
        {
          elements: [
            { type: 'key', labels: [{ content: 'Tab', position: 'middle left' }], code: 'Tab', shape: [{ size: [1.5, 1] }] },
            { type: 'key', labels: [{ content: 'Q', position: 'top left' }], code: 'KeyQ', },
            { type: 'key', labels: [{ content: 'W', position: 'top left' }], code: 'KeyW', },
            { type: 'key', labels: [{ content: 'E', position: 'top left' }], code: 'KeyE', },
            { type: 'key', labels: [{ content: 'R', position: 'top left' }], code: 'KeyR', },
            { type: 'key', labels: [{ content: 'T', position: 'top left' }], code: 'KeyT', },
            { type: 'key', labels: [{ content: 'Y', position: 'top left' }], code: 'KeyY', },
            { type: 'key', labels: [{ content: 'U', position: 'top left' }], code: 'KeyU', },
            { type: 'key', labels: [{ content: 'I', position: 'top left' }], code: 'KeyI', },
            { type: 'key', labels: [{ content: 'O', position: 'top left' }], code: 'KeyO', },
            { type: 'key', labels: [{ content: 'P', position: 'top left' }], code: 'KeyP', },
            { type: 'key', labels: [{ content: 'Ğ', position: 'top left' }], code: 'BracketLeft', },
            { type: 'key', labels: [{ content: 'Ü', position: 'top left' }], code: 'BracketRight', },
            {
              type: 'key', labels: [{ content: 'Enter', position: [0, 1.5, 0, -0.5] }], code: 'Enter',
              shape: [{ size: [1.5, 2] }, { size: [2.25, 1], position: [-0.75, 1] }]
            },
          ]
        },
        {
          elements: [
            {
              type: 'key', labels: [{ content: 'Caps Lock', position: 'middle left' }], code: 'CapsLock',
              shape: [{ size: [1.75, 1] }]
            },
            { type: 'key', labels: [{ content: 'A', position: 'top left' }], code: 'KeyA' },
            { type: 'key', labels: [{ content: 'S', position: 'top left' }], code: 'KeyS' },
            { type: 'key', labels: [{ content: 'D', position: 'top left' }], code: 'KeyD' },
            { type: 'key', labels: [{ content: 'F', position: 'top left' }], code: 'KeyF' },
            { type: 'key', labels: [{ content: 'G', position: 'top left' }], code: 'KeyG' },
            { type: 'key', labels: [{ content: 'H', position: 'top left' }], code: 'KeyH' },
            { type: 'key', labels: [{ content: 'J', position: 'top left' }], code: 'KeyJ' },
            { type: 'key', labels: [{ content: 'K', position: 'top left' }], code: 'KeyK' },
            { type: 'key', labels: [{ content: 'L', position: 'top left' }], code: 'KeyL' },
            { type: 'key', labels: [{ content: 'Ş', position: 'top left' }], code: 'Semicolon' },
            { type: 'key', labels: [{ content: 'İ', position: 'top left' }], code: 'Quote' },
          ]
        },
        {
          elements: [
            {
              type: 'key', labels: [{ content: 'Shift', position: 'middle left' }], code: 'ShiftLeft',
              shape: [{ size: [1.25, 1] }]
            },
            { type: 'key', labels: [{ content: '<', position: 'bottom left' }], code: 'IntlBackslash' },
            { type: 'key', labels: [{ content: 'Z', position: 'top left' }], code: 'KeyZ' },
            { type: 'key', labels: [{ content: 'X', position: 'top left' }], code: 'KeyX' },
            { type: 'key', labels: [{ content: 'C', position: 'top left' }], code: 'KeyC' },
            { type: 'key', labels: [{ content: 'V', position: 'top left' }], code: 'KeyV' },
            { type: 'key', labels: [{ content: 'B', position: 'top left' }], code: 'KeyB' },
            { type: 'key', labels: [{ content: 'N', position: 'top left' }], code: 'KeyN' },
            { type: 'key', labels: [{ content: 'M', position: 'top left' }], code: 'KeyM' },
            { type: 'key', labels: [{ content: 'Ö', position: 'top left' }], code: 'Comma' },
            { type: 'key', labels: [{ content: 'Ç', position: 'top left' }], code: 'Period' },
            { type: 'key', labels: [{ content: '.', position: 'bottom left' }], code: 'Slash' },
            {
              type: 'key', labels: [{ content: 'Shift', position: 'middle left' }], code: 'ShiftRight',
              shape: [{ size: [2.75, 1] }]
            },
          ]
        },
        {
          elements: [
            {
              type: 'key', labels: [{ content: 'Ctrl', position: 'middle left' }], code: 'ControlLeft',
              shape: [{ size: [1.5, 1] }]
            },
            {
              type: 'key', labels: [{ content: 'Win', position: 'middle left' }], code: 'MetaLeft',
              shape: [{ size: [1.25, 1] }]
            },
            {
              type: 'key', labels: [{ content: 'Alt', position: 'middle left' }], code: 'AltLeft',
              shape: [{ size: [1.25, 1] }]
            },
            {
              type: 'key', labels: [], code: 'Space',
              shape: [{ size: [5.75, 1] }]
            },
            {
              type: 'key', labels: [{ content: 'Alt Gr', position: 'middle left' }], code: 'AltRight',
              shape: [{ size: [1.25, 1] }]
            },
            {
              type: 'key', labels: [{ content: 'Win', position: 'middle left' }], code: 'MetaRight',
              shape: [{ size: [1.25, 1] }]
            },
            {
              type: 'key', labels: [{ content: '', position: 'middle left' }], code: 'ContextMenu',
              shape: [{ size: [1.25, 1] }]
            },
            {
              type: 'key', labels: [{ content: 'Ctrl', position: 'middle left' }], code: 'ControlRight',
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
