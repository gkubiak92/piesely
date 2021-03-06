import { ButtonProps } from 'components/button/Button.types';
import clsx from 'clsx';

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    className={clsx(
      className,
      'bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-md'
    )}
    {...props}
  >
    {children}
  </button>
);
