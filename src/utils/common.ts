export function formatNumber(value: number | string, format = 'id-ID'): string {
  return value ? new Intl.NumberFormat(format).format(Number(value)) : '0';
}

export function formatStringUcFirst(value: string): string {
  const valueArr = value.split(' ');
  return valueArr
    .map((val) => val[0].toUpperCase() + val.substring(1).toLowerCase())
    .join(' ');
}
