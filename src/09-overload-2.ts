// lauti => [l,a,u,t,i] => string => string[]
// [l,a,u,t,i] => lauti => string[] => string

export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;


// export function parseString(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }

export function parseString(input: unknown): unknown {
    if (Array.isArray(input)) {
      return input.join('');
    } else if (typeof input === 'string'){
      return input.split('');
    } else if (typeof input === 'number'){
      return true;
    }
  }

const rtaArray = parseString('Lautaro');
rtaArray.reverse();
console.log('rtaArray', rtaArray);

const rtaStr = parseString(['L', 'a', 'u']);
rtaStr.toLowerCase();
console.log('rtaArray', rtaStr);

const rtaBoolean = parseString(12);

