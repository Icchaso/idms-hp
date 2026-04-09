import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind クラスの結合と重複解決を行うユーティリティ。
 * 例: cn("p-2", condition && "p-4") => "p-4"
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
