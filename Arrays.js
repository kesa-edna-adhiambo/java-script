let fruits = ['Mango', 'Apple', 'Banana', 'Orange'];

let array = new Array(20, 30, 6, 7);

console.log({fruits});
console.log({array});

//assigning new value to the given index
fruits[1] = 3;
console.log({fruits});

//finding the length
console.log('length', fruits.length);

//finding last element of a string
console.log(fruits[20]);

//ARRAY METHODS
let addlast = fruits.push('kiwi');
console.log({fruits});

let addFirst = fruits.unshift('Paipai');
console.log({fruits});

let removeLast = fruits.pop();
console.log({fruits});

let removeFirst = fruits.shift();
console.log({fruits});


let items = [20,30,40,50,60];

//adding every item in an array
let add = items.reduce((acc, curr) => acc + curr);
console.log({add});

//multiply every item in the array by 2
let multiply = items.map(item => item*2);
console.log({multiply});


let addEach =[]
//let total = 0;
let addForEach = items.forEach((item)=>{
    const add = item + 2
    console.log({add});
    addEach.push(add);
    //total <= items;
});
console.log({addEach});
//console.log({total});

//add each item in an array by two
let addeach = items.forEach(item => item + 2 );
console.log({addEach});

//items.map(item => {
    //multiplyAll <= item;
    //return item
//})
//console.log({multiplyAll});


//Destructure

let [num1, num2, num3,... rest] = items;
console.log({num1});
console.log({num2});
console.log({num3});

console.log({rest});