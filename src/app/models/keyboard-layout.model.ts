export type Vector2 = [number, number];

export type KeyboardLabelPosition =
  'top left' | 'top center' | 'top right' |
  'middle left' | 'middle center' | 'middle right' |
  'bottom left' | 'bottom center' | 'bottom right' |
  Vector2 | [number, number, number, number];

export type KeyboardKeyPositioning = 'absolute' | 'flow';

export type KeyboardPadding = number | [number] | [number, number] | [number, number, number] | [number, number, number, number];

export type KeyboardHorizontalAlignment = 'left' | 'center' | 'right';

export interface KeyboardLabel {
  position?: KeyboardLabelPosition; // Defaults to 'top left'
  sizeMultiplier?: number; // Defaults to 1
  content: string;
}

export interface KeyboardKeyShape {
  size: Vector2;
  position?: Vector2; // Defaults to [0, 0]
}

export interface KeyboardKeyCodeMapping {
  code: number;
  metaKey?: string | number;
}

export type KeyboardElementType = 'key' | 'space';

export interface KeyboardKey {
  type: 'key';
  labels: KeyboardLabel[];
  offset?: Vector2; // Defaults to no offset
  shape?: KeyboardKeyShape | KeyboardKeyShape[]; // Defaults to a rectangular shape (1, 1)
  bevel?: KeyboardPadding; // Defaults to [0, 0.1, 0.1, 0.1]
  codes: KeyboardKeyCodeMapping[];
}

export interface KeyboardSpace {
  type?: 'space';
  size: number;
}

export type KeyboardElement = KeyboardKey | KeyboardSpace;

export interface KeyboardRowDefinition {
  height?: number; // Defaults to 1
  empty?: boolean; // Defaults to false, not necessary but could be useful
  padding?: KeyboardPadding;
  alignment?: KeyboardHorizontalAlignment; // Defaults to left
  elements?: KeyboardElement[];
}

export interface KeyboardLayout {
  padding?: KeyboardPadding;
  rows?: KeyboardRowDefinition[];
  absoluteElements?: KeyboardElement[];
}
