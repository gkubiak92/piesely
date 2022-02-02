import { ButtonProps } from 'components/button/Button.types';
import clsx from 'clsx';

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    className={clsx(className, 'bg-blue-500 text-white p-2 rounded-md')}
    {...props}
  >
    {children}
  </button>
);
