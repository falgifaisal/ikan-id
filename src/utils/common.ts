export function formatNumber(value: number | string, format = 'id-ID'): string {
  return value ? new Intl.NumberFormat(format).format(Number(value)) : '0';
}

export function formatStringUcFirst(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
