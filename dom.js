const container = document.getElementById('container');
console.log('parent', container.parentElement);
console.log('previous Sibling...' , container.previousElementSibling);
console.log('Next Sibling...' , container.nextElementSibling);
console.log('children' , container.children);

const body = document.body;
console.log('Last Child', body.lastElementChild);
console.log('First Child', body.firstChild);

//Editing Dom Element
const containerText = document.getElementById('container-text')
containerText.innerHTML = 'Am I really a child?'

//Creating Dom Element
const newHeading = document.createElement('h1');
container.appendChild(newHeading);
newHeading.innerHTML = 'Introduction'
newHeading.style.color = 'red'

const button = docuent.getElementByButton('button');
button.style.border = "name"
button.style.padding = "10px 15px"
button.style.backgrouncolor = "#e2e2e2";
button.style.borderRadius = "5px";
button.style.cursor = "pointer"

button.addEventListener('click', function(){
button.innerHTML = "clicked"
button.style.backgrouncolor = "green";
button.style.color = "#fffff"

})

