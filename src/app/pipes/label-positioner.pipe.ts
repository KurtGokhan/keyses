import { Pipe, PipeTransform } from '@angular/core';
import { KeyboardLabelPosition } from '../models/keyboard-layout.model';

@Pipe({
  name: 'labelPositionerClass'
})
export class LabelPositionerClassPipe implements PipeTransform {

  transform(value: KeyboardLabelPosition, defaultClass: string = ''): any {
    if (typeof value === 'string') {
      return value;
    }

    return defaultClass;
  }

}

@Pipe({
  name: 'labelPositioner'
})
export class LabelPositionerPipe implements PipeTransform {

  transform(value: KeyboardLabelPosition, defaultClass: string = ''): any {
    const dictionary = {
      'top left': [0, 0, 0, 0],
      'top center': [0.5, 0, -0.5, 0],
      'top right': [1, 0, -1, 0],
      'middle left': [0, 0.5, 0, -0.5],
      'middle center': [0.5, 0.5, -0.5, -0.5],
      'middle right': [1, 0.5, -1, -0.5],
      'bottom left': [0, 1, 0, -1],
      'bottom center': [0.5, 1, -0.5, -1],
      'bottom right': [1, 1, -1, -1],
    };

    if (typeof value === 'string') {
      value = dictionary[value] as any;
    }
    if (!value) {
      value = [0, 0, 0, 0];
    }

    const x = (value[0] || 0) as number;
    const y = (value[1] || 0) as number;
    const ox = (value[2] || 0) as number;
    const oy = (value[3] || 0) as number;

    const tx = (x * 100) + '%';
    const ty = (y * 100) + '%';

    const mtx = (ox * 100) + '%';
    const mty = (oy * 100) + '%';

    return {
      left: tx,
      top: ty,
      transform: `translate(${mtx}, ${mty})`,
    };
  }
}
