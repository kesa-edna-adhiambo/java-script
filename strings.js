let a = 'Hello';
let b = "world"
let c =`There`;

console.log('length', a.length);
console.log('index', a[3]);
console.log('position', a.indexOf('o'));

a[2] = 'f';
console.log({a});

//concatenantion
let d = a + ' ' + b;
console.log({d});

let e = `${a} ${b}. I like coding!`;
console.log({e});