import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Shared responsive width wrapper.
 * Used across all major sections.
 */
function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[1440px]
        px-4
        sm:px-6
        lg:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;