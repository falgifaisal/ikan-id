import { isValid } from 'date-fns';
import { format } from 'date-fns-tz';

const defaultTimeZone = 'Asia/Jakarta';
const today = new Date();

export function isValidDate(value: string): boolean {
  return isValid(new Date(value));
}

export function formatDate(
  value = '',
  formatValue = 'yyyy-MM-dd',
  timeZone = defaultTimeZone,
): string {
  return format(isValidDate(value) ? new Date(value) : today, formatValue, {
    timeZone,
  });
}
