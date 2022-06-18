const startButtonRef = document.querySelector('button[data-start]');
const stopButtonRef = document.querySelector('button[data-stop]');
const bodyRef = document.body;

let interval = null;

bodyRef.style.height = '100vw';
bodyRef.style.width = '100vw';

startButtonRef.addEventListener('click', onStart);
stopButtonRef.addEventListener('click', onStop);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() { 
    startButtonRef.disabled = true;
    stopButtonRef.disabled = false;
    bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
    interval = setInterval(() => {
        bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
}

function onStop() { 
    startButtonRef.disabled = false;
    stopButtonRef.disabled = true;
    clearInterval(interval);
}