// Method 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World Again!");

// Method 3
const btnSec = document.querySelector("#btnSec");
btnSec.addEventListener('click', () => {
    alert("Hello World Again and Again...");
});


// Function Methods
alertFunction = () => {
    alert("Yayaya lolo lo");  // Function
}

// Method 2
const btnFuncTwo = document.querySelector('#btnFuncTwo');
btnFuncTwo.onclick = alertFunction;

// Method 3
//const btnFuncThree = document.querySelector('#btnFuncThree');
//btnFuncThree.addEventListener('click', alertFunction);

btnFuncThree.addEventListener('click', function(e){
    e.target.style.background = 'blue';
});


// How to select all queries
const buttons = document.querySelectorAll("#container > button");
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        alert(button.id);
    });
});