import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keySize'
})
export class KeySizePipe implements PipeTransform {

  transform(value: number, defaultSize: number = 1, extraSize: number = 0): any {
    const baseSize = 40;

    if (value == null) {
      return (defaultSize * baseSize + extraSize) + 'px';
    }

    return (baseSize * value + extraSize) + 'px';
  }

}

@Pipe({
  name: 'keySizePercentage'
})
export class KeySizePercentagePipe implements PipeTransform {

  transform(value: number, defaultSize: number = 1, extraSize: number = 0): any {
    const baseSize = 100;

    if (value == null) {
      return (defaultSize * baseSize + extraSize) + '%';
    }

    return (baseSize * value + extraSize) + '%';
  }

}
