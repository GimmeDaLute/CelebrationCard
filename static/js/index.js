const handlers = require('./handlers');

function init(){
    const modeCheck = document.getElementById('dark-mode');
    modeCheck.addEventListener('click', handlers.switchMode)
}

init()