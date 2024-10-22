const display = document.getElementById('display');
const equalsButton = document.getElementById('equal-btn');
const modal = document.getElementById('prankModal');
const closeBtn = document.getElementsByClassName('close-btn')[0];

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}



function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}


equalsButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

