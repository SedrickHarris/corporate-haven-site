import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Compose Tailwind class strings safely.
 * Combines clsx (conditional class composition) with tailwind-merge
 * (conflict resolution: later utilities win).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
