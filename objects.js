const cup = {
    color: 'red',
    size: 'small',
    shape:'cylindrical',
    functionality:{
        drinkType:'tea',
        temperature:'hot'
    },
    design:['floral','polka','checked'],
    drink:function(){   //Refers to the cup object but when you use arrow function i.e drink:=>{} it refers to global object
        console.log('Use me to drink tea');
        console.log(`My main use is to drink ${this.functionality.drinkType}`);
    }
};

console.log('size',cup.size); //dot notation
console.log({design:cup.design[0]});
console.log('shape', cup['shape']); //bracket notation
console.log('drinkType', cup.functionality.drinkType);
cup.drink();
//when using arrow function when you return you console for it to be output:
//console.log(cup.drink())

//object methods
//1. for deleting
delete cup.color;
console.log({cup});

//2
const values = Object.values(cup);
console.log({values});

//3
const keys = Object.keys(cup);
console.log({keys})

//4
Object.keys(cup).forEach(item => {
    console.log({keys:item, values : cup[item]});
})
