
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


//setTimeout()
//clearTimeout()

function getHover () {
    const elements = document.querySelectorAll('.hoverBox');

elements.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'red';

        setTimeout(() => {
            event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
        }, 1000);

})})};

getHover();

//1. querySelectorAll selector that receives the class name.
//2. we attach an eventListener to that variable with forEach



