// Dark Mode
const modeCheck = document.getElementById('dark-mode');
const header = document.querySelector('header');
const body = document.querySelector('body');
const headerText = header.querySelector('h3');

modeCheck.addEventListener('click', switchMode)

function switchMode(e){
    e.target.checked ? darkMode() : lightMode();
}

function darkMode(){
    body.className = 'dark';
}

function lightMode(){
    body.className = 'light';
}