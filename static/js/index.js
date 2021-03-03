const handlers = require('./handlers');

function init(){
    const modeCheck = document.getElementById('dark-mode');
    const form = document.querySelector('#my-form');
    form.addEventListener('submit', handlers.handleFormSubmit)
    modeCheck.addEventListener('click', handlers.switchMode)
}

init()