const multiplyByTwo = (num) => {
    let newArray = [];

    for (let i = 0 ; i < num.length; i++) {
        const result = num[i] * 2;
        newArray.push(result);
    }
    return newArray;
};

console.log(multiplyByTwo([2,3,4,5,6,7]));

const totalSum = (num) => {
    let sum = 0;
    for(let element of num){
     sum += element;
}
  return sum
}

console.log(totalSum([1,2,3,4,5,6,7,8]))

const teachStudents = (students) => {
    while (students.length > 2) {
        console.log ('Teach students') 
        students.pop();  
         
    }
}

teachStudents(('Edna', 'Levin', 'Brenda'))

const childrenNames = (children) => {
    do{
        console.log('There are many children');
    }
    while (children.length > 3)
}

childrenNames(["Faith", "Kate", "Liz", "Precious", "Edna"])

const checkDayOfTheWeek = (day) => {
    switch(day)
    case 'Monday':
    console.log ('Today is Monday')

    case 'Tuesday':
    console.log('Today is Tuesday')
    break;

    default:
        console.log('The day isnot listed')

}

checkDayOfTheWeek('Monday')
