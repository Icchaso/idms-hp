import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * 全ページ共通の最大幅コンテナ。max-width 1200px、左右に余白を確保。
 */
export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component
      className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
