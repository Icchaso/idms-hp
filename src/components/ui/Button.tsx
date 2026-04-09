import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-950 border border-navy-900 hover:border-navy-950",
  outline:
    "bg-transparent text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-white",
  ghost:
    "bg-transparent text-navy-900 border border-transparent hover:bg-navy-50",
  gold:
    "bg-gold-500 text-navy-950 border border-gold-500 hover:bg-gold-600 hover:border-gold-600",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wider transition-colors duration-200 rounded-none";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...buttonRest } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
