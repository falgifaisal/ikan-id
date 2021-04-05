export function formatNumber(value: number | string, format = 'id-ID'): string {
  return value ? new Intl.NumberFormat(format).format(Number(value)) : '0';
}

export function formatStringUcFirst(value: string | undefined): string {
  const valueArr: string[] = value ? value.split(' ') : [];
  return valueArr
    .map((val) => val[0].toUpperCase() + val.substring(1).toLowerCase())
    .join(' ');
}

export function removeDuplicateObjectArray(
  arr: string[],
  key: string,
): string[] {
  const filteredArr: any = Array.from(
    new Set(arr.map((a: any) => a[key])),
  ).map((b: any) => arr.find((a: any) => a[key] === b));

  return filteredArr;
}

export function sortArrayObject(arr: string[], key: string): string[] {
  return arr.sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1));
}

export function createArrayNumber(count: number): number[] {
  const dataArr: number[] = [];
  let p: number = 1;
  for (p = 1; p <= count; p += 1) {
    dataArr.push(p);
  }
  return dataArr;
}
