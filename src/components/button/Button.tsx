import { ButtonProps } from 'components/button/Button.types';
import clsx from 'clsx';

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button className={clsx(className, 'bg-amber-400 p-2 rounded-md')} {...props}>
    {children}
  </button>
);
