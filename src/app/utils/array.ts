export function deepCopyArray(source: any): any {
  return [].concat(JSON.parse(JSON.stringify(source)));
}
