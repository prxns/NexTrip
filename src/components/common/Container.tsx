import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Global responsive container wrapper.
 * Keeps consistent page spacing across the app.
 */
function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`
        w-full
        max-w-[1440px]
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;