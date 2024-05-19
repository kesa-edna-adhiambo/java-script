class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
    }

};
const jane = new Person('Jane', 30);
console.log({jane});
jane.greet();
console.log('prototype', Person.prototype)

Person.prototype.nationality = 'Kenyan';
console.log('nationality', jane.nationality);

class Student extends Person{
    constructor(name, age,school) {
        super(name, age);
        this.school = school
    }
    profession(){
        console.log(`I am a student at ${this.school}`)
    }
};

const edna = new Student('Edna', 22 ,'AkiraChix');

console.log({edna});
console.log('nationality', edna.nationality);
edna.greet()
edna.profession()


function countFrequency( 
    inputString, 
    targetChar 
) { 
    let count = 0; 
    for ( 
        let i = 0; 
        i < inputString.length; 
        i++ 
    ) { 
        if ( 
            inputString[i] === 
            targetChar 
        ) { 
            count++; 
        } 
    } 
    return count; 
} 
  
const text = "Hello Geeks!"; 
const charToCount = "l"; 
  
console.log( 
    countFrequency(text, charToCount));