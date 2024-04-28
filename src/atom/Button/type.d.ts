export interface IButtonProps {
  name: string;
  type?: "button" | "submit" | "reset"
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className: string;
}
