export type KeyCombination = string; // keys can be combined by + (simultaneus press) or whitespace (chaining)
export type KeyBindingContext = string; // context can be combined by && or ||

export interface KeyCommand {
  id: string;
  name?: string;
  description?: string;
  context?: KeyBindingContext;
  key: KeyCombination;
}

export interface KeyBindings {
  modifierKeys?: string[]; // Default modifier keys by default (Shift, Ctrl, Alt, Meta, Fn)
  commands: KeyCommand[];
}
