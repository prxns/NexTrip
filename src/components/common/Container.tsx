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
        w-full
        max-w-[1440px]
        mx-auto
        px-5
        sm:px-8
        lg:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Container;