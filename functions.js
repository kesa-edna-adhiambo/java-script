function add (num1, num2){

  const sum = num1 + num2;
  console.log({console:sum});
  return {return:sum};

  //local and global
  //console.log({'num-in':num});

}
console.log(add(2,3));
add(4,5);

//local and global
//console.log({'num-out':num});


//function expression
const subtraction = function (num1, num2){
    console.log(num1 - num2);
}

subtraction(20, 10)

//arrow functions
const multiply = (num1, num2) => console.log(num1 * num2);
multiply(5, 6);

//IIFEs 
(function(){
    console.log(("Hello"));
})();

//Hoisting

console.log({greet});

var greet = "Hello there";

console.log({greet2: greet})





