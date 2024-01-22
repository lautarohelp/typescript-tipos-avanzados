// lauti => [l,a,u,t,i] => string => string[]
// [l,a,u,t,i] => lauti => string[] => string

function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rtaArray = parseString('Lautaro');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', rtaArray);

const rtaStr = parseString(['L', 'a', 'u']);
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaArray', rtaStr);

