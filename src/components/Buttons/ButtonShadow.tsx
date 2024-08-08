import React, { type SVGProps } from 'react';
import type { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import { cn } from '@/libs/cn';

type ButtonShadowProps = {
  icon?: React.FC<SVGProps<SVGSVGElement>> | IconType;
  iconClassName?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  text?: string;
} & React.ComponentPropsWithRef<'button'>;

const ButtonShadow = React.forwardRef<HTMLButtonElement, ButtonShadowProps>(
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
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;
    return (
      <button
        className="group relative rounded-full p-px text-[0.8125rem] font-semibold leading-6 text-white shadow-xl shadow-zinc-950"
        disabled={disabled}
        ref={ref}
        type="button"
        {...rest}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full" />
        {isLoading && (
          <div
            className={cn(
              {
                'text-black': ['light'],
              },
              'disabled:cursor-not-allowed',
              isLoading &&
                'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
              className
            )}
          >
            <ImSpinner2 className="animate-spin" />
          </div>
        )}
        <div className="relative z-10 flex items-center space-x-2 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-900 px-4 py-1 ring-1 ring-white/10">
          <span className="text-sm font-medium">{text}</span>

          {Icon && <Icon className={cn(iconClassName)} />}
        </div>

        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-blue-700/0 via-blue-700/90 to-blue-800/0 opacity-0 transition-opacity duration-500 group-hover:opacity-90" />
      </button>
    );
  }
);

ButtonShadow.displayName = 'ButtonShadow';

export default ButtonShadow;
