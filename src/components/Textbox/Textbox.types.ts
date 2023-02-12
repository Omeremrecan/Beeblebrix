export type TextboxProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: "password"
  onEnter?: () => void
};
