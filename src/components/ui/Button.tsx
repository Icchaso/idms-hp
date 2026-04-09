import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-950 border border-navy-900 hover:border-navy-950 hover:shadow-[0_8px_24px_-8px_rgba(11,37,69,0.5)]",
  outline:
    "bg-transparent text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-white hover:shadow-[0_8px_24px_-8px_rgba(11,37,69,0.4)]",
  ghost:
    "bg-transparent text-navy-900 border border-transparent hover:bg-navy-50",
  gold:
    "shimmer bg-gold-500 text-navy-950 border border-gold-500 hover:bg-gold-600 hover:border-gold-600 hover:shadow-[0_8px_24px_-8px_rgba(201,161,74,0.7)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
};

const baseClasses =
  "relative inline-flex items-center justify-center gap-2 font-medium tracking-wider transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-none hover:-translate-y-0.5";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href !== undefined) {
    // variant / size / className / children を rest から除外しないと
    // {...rest} 展開で className が上書きされたり、variant="outline" が DOM に漏れたりする
    const {
      href,
      external,
      variant: _variant,
      size: _size,
      className: _className,
      children: _children,
      ...anchorRest
    } = props;
    void _variant;
    void _size;
    void _className;
    void _children;

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  const {
    variant: _btnVariant,
    size: _btnSize,
    className: _btnClassName,
    children: _btnChildren,
    ...buttonRest
  } = props as ButtonAsButton;
  void _btnVariant;
  void _btnSize;
  void _btnClassName;
  void _btnChildren;

  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
