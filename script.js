const key = document.querySelector('.key');
const keyCode = document.querySelector('.keyCode');
const code = document.querySelector('.code');
const start = document.querySelector('.start');
const display = document.querySelector('.display');

window.addEventListener('keydown', event => {
    start.style.display = 'none';
    display.style.display = 'contents';
    if (event.key === ' ') {
        key.innerHTML = 'Space';
    } else {
        key.innerHTML = (event.key);
    }
    
    keyCode.innerHTML = (event.keyCode);
    code.innerHTML = (event.code);
})
