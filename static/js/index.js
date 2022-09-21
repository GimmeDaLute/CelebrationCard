
const handlers = require('./handlers');

function init(){
    const modeCheck = document.getElementById('dark-mode');
    modeCheck.addEventListener('click', handlers.switchMode)
}

init()

var form = document.getElementById("my-form");
function handleForm(e) {
    e.preventDefault();
    console.log("pleaaaaaaaaase work");
    
    const btn = document.querySelector('form');
    btn.style.display = "none"

    const appear = document.querySelector('.celebration');
    appear.style.display = "block"
    } 
form.addEventListener('submit',handleForm);

