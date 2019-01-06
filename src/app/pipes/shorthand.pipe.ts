import { Pipe, PipeTransform } from '@angular/core';
import { KeyboardPadding } from '../models/keyboard-layout.model';

@Pipe({
  name: 'shorthand'
})
export class ShorthandPipe implements PipeTransform {
  private baseSize = 40;

  transform(value: KeyboardPadding, ...args: [number]): string {
    const extraPadding = args && (args[0] || 0) || 0;

    if (!value) {
      return '0';
    }

    if (typeof value === 'number') {
      return this.calculateFromBaseSize(value, extraPadding) + 'px';
    }

    return value.map(x => this.calculateFromBaseSize(x, extraPadding) + 'px').join(' ');
  }

  calculateFromBaseSize(value, extraPadding) {
    return (value || 0) * this.baseSize + extraPadding;
  }

}
