import React, { type SVGProps } from 'react';
import type { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import { cn } from '@/libs/cn';

type ButtonBorderProps = {
  icon?: React.FC<SVGProps<SVGSVGElement>> | IconType;
  iconClassName?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  text?: string;
} & React.ComponentPropsWithRef<'button'>;

const ButtonBorder = React.forwardRef<HTMLButtonElement, ButtonBorderProps>(
  (
    {
      className,
      disabled: buttonDisabled,
      isLoading,
      icon: Icon,
      iconClassName,
      text,
      ...rest
    },
    ref,
  ) => {
    const disabled = isLoading || buttonDisabled;
    return (
      <button
        className={cn(
          'mt-2 focus:ring-offset-slate-50" inline-flex h-10 items-center justify-center rounded-full border border-slate-800 bg-gradient-to-r from-blue-500 to-indigo-500 px-6 text-sm font-medium text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:opacity-50',
          className,
          {
            'cursor-not-allowed': disabled,
            'animate-shimmer': !disabled,
            'hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600':
              !disabled,
            'active:bg-gradient-to-r active:from-blue-700 active:to-indigo-700':
              !disabled,
          },
        )}
        disabled={disabled}
        ref={ref}
        type="button"
        {...rest}
      >
        {isLoading && (
          <div
            className={cn(
              {
                'text-black': ['light'],
              },
              'disabled:cursor-not-allowed',
              isLoading &&
                'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
              className,
            )}
          >
            <ImSpinner2 className="animate-spin" />
          </div>
        )}

        {text}
        {Icon && <Icon className={cn(iconClassName)} />}
      </button>
    );
  },
);

ButtonBorder.displayName = 'ButtonBorder';

export default ButtonBorder;
