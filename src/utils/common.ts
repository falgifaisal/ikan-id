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

export function compareValues(key?: any, order = 'asc'): any {
  return function innerSort(a?: any, b?: any): any {
    if (
      !Object.prototype.hasOwnProperty.call(a, key)
      || !Object.prototype.hasOwnProperty.call(b, key)
    ) {
      return 0;
    }

    const dataA = typeof a[key] === 'string'
      ? a[key].toUpperCase()
      : typeof a[key] === 'number'
        ? parseFloat(a[key])
        : a[key];
    const dataB = typeof b[key] === 'string'
      ? b[key].toUpperCase()
      : typeof b[key] === 'number'
        ? parseFloat(b[key])
        : b[key];

    let comparison = 0;
    if (dataA > dataB) {
      comparison = 1;
    } else if (dataA < dataB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
}

export function sortArrayObject(
  arr: string[],
  key: string,
  order = 'asc',
): string[] {
  // return arr.sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1));
  return arr.sort(compareValues(key, order));
}

export function createArrayNumber(count: number): number[] {
  const dataArr: number[] = [];
  let p: number = 1;
  for (p = 1; p <= count; p += 1) {
    dataArr.push(p);
  }
  return dataArr;
}
