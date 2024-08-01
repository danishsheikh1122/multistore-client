import { cn } from "@/lib/utils";
import React, { ForwardedRef, forwardRef } from "react";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `w-auto rounded-full bg-black border-transparent px-5 py-3  disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75`,
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
