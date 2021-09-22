const { darkMode, lightMode } = require('./helpers');

function switchMode(e){
    console.log('mode')
    e.target.checked ? darkMode() : lightMode();
}

module.exports = { switchMode }