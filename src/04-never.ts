const withoutEnd = () => {
  while (true) {
    console.log('nunca parar de aprender');
  }
}


const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string'
  } else if (Array.isArray(input)) {
    return 'es un array'
  }
  return fail('not match')
};

console.log(example('Hola'));
console.log(example([,12,3,56,7,78]));
console.log(example(1234)); // detiene
console.log(example('hello the after fail'));

