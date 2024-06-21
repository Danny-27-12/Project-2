
const container = document.getElementById('box-container');
  
function makeGrid(){
for (i=0; i <= 255; i++){
    const newElement = document.createElement('div');
    newElement.classList.add('hoverBox');
    container.appendChild(newElement);
    
}};

makeGrid();
    
// declaring a new div with .createElement
// receiving an ID and placing that div into the parent div (newElement) with .appendChild
// adding the for loop allows 16 divs to be created.

// let hover = document.getElementById('box-container div');

// document.addEventListener('mouseover', event => {
//     event.target.style.backgroundColor = 'tomato';
    
// });















