export interface Props {
  type: string;
  placeholder?: string;
  width: string;
  label?: string;
  innerRef?: React.RefObject<HTMLInputElement>;
  error?: string;
}
