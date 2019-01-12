import { KeyboardPadding } from '~/models';

export function paddingDefinitionToShorthand(padding: KeyboardPadding): string {
  if (!padding) {
    return '0';
  }

  if (typeof padding === 'number') {
    return padding.toString() + 'px';
  }

  return padding.map(x => (x || 0).toString() + 'px').join(' ');
}
