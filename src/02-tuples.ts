const price: (number | string)[] = [1,2,3,4,5,6, 'as'];
price.push(1);
price.push('1');

let user: [string, number, boolean];
// user = ['lataro', 16]
// user = [12, "16"]
// user = ['lataro']
// user = ['lataro', 12, 12]
user = ['lauti', 12, true];

const[username, age] = user;
console.log(username);
console.log(age);


