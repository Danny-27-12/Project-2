
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


function getHoverPattern() {

    let boxes = document.querySelectorAll('.hoverBox');

        boxes.forEach((box) => {
            box.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'hsl(196, 64%, 43%)';

                   let timeId = setTimeout( () => {
                        event.target.style.backgroundColor = 'hsl(170, 64%, 43%)';
                    }, 500);
                            
            })
        })
};

getHoverPattern();

    





//1. querySelectorAll selector that receives the class name.
//2. we attach an eventListener to that variable with forEach



