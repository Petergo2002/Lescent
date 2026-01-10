import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount: string, currencyCode: string) {
  return new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
  }).format(parseFloat(amount));
}

export function ensureStartsWith(stringToCheck: string, startsWith: string) {
  return stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;
}
