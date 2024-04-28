export interface IInputProps {
  type: 'text' | 'tel' | 'number' | 'checkbox' | 'email' | 'password';
  className?: string;
  placeholder?: string;
  name: string;
  classNameLabel?: string;
  readOnly?: boolean;
  value?: string | number | undefined | readonly string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  defaultValue?: string | number | undefined | readonly string[];
}

