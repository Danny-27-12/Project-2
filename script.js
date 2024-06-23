
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


function getHoverPattern() {

    let boxes = document.querySelectorAll('.hoverBox');

        boxes.forEach((box) => {
            box.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = getRandomColor();

                   let timeId = setTimeout( () => {
                        event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                    }, 500);
                            
            })
        })
};

getHoverPattern();

//1. state the function
//2. set up a forEach method that selects each div, adds a 'mouseover' and change the color to random.
//3. set a timer which converts the div to its original color after a certain period of time.

function getRandomColor() {
    let color = '#';
    let choice = '0123456789ABCDEF';

    for (let i=0; i < 6; i++){
        color += choice[Math.floor(Math.random() * 16)];
    } 
    return color;
};

getRandomColor();

console.log(getRandomColor());



