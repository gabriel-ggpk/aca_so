export interface ButtonProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  width: string;
  text?: string;
  onClick: () => void;
  fontWeigth?: string;
  font?: string;
  label?: string;
}
export interface ButtonLabelProps {
  children?: React.ReactNode;
  labelColor?: string;
}
