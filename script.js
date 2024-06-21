
let container = document.getElementById('box-container');
    
for (i=0; i <= 255; i++){
    const newElement = document.createElement('div');
    newElement.style.width = '20px';
    newElement.style.height = '20px';
    newElement.style.backgroundColor = 'pink';
    container.appendChild(newElement);
}
    
// declaring a new div with .createElement
// receiving an ID and placing that div into the parent div (newElement) with .appendChild
// adding the for loop allows 16 divs to be created.
















/*
function makeGrid(){
for (i=0; i <= 16; i++){
   let newElement =  document.createElement('div');
   document.body.appendChild(newElement);
}
};
makeGrid();

const container = document.getElementById('box-container');
*/

