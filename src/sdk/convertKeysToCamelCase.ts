type ObjectType = { [key: string]: any };

const toCamelCase = (str: string): string =>
  str.replace(/([-_][a-z])/g, (group: string) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  );

export function convertKeysToCamelCase(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((v: any) => convertKeysToCamelCase(v));
  }

  return Object.keys(obj).reduce((acc: ObjectType, key: string) => {
    acc[toCamelCase(key)] = convertKeysToCamelCase(obj[key]);
    return acc;
  }, {});
}
