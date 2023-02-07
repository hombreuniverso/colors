//document.body.style.padding = '10px';

//Reference select, h1 and html tags
const selector = document.querySelector('select');
const h1Tag = document.querySelector('h1');
const htmlTag = document.querySelector('html');

//Add event listener with parameters 'change' and arrow function
selector.addEventListener('change', () => {
//Declare/ Assign variable to store color choice
let choice = selector.value;

//Create switch to check for color and call update with colors as arguments, i.e. set colors
switch(choice){
    case 'black':
        update('black', 'white')
        break;
    
    case 'white':
        update('white', 'black')
        break;
        
    case 'purple':
        update('purple', 'white')
        break;
        
    case 'yellow':
        update('yellow', 'black')
        break;
    
    case 'blue':
        update('blue', 'white')
        break;
        
    case 'green':
        update('green', 'black')
        break;	
        
     case 'orange':
        update('orange', 'white')
        break;	    

}

    
});

//Create update function with parameters to set colors
function update(bgColor, textColor){
    htmlTag.style.backgroundColor = bgColor;
    htmlTag.style.color = textColor;
}

//Create default colors		
update('cream', 'red');
    