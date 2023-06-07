/*let color1 = document.querySelector('.color-1');
let color2 = document.querySelector('.color-2');
let body = document.getElementById('gradient');
let firstCss = document.querySelector('h3');
let secondCss = document.getElementsByTagName('h3')[1];




console.log(firstCss);
console.log(color1);
console.log(color2);







function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value +', ' + color2.value + ')';
    firstCss.textContent = body.style.background + ';';
    secondCss.textContent = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ');';
}
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);*/



let color1 = document.querySelector('.color-1');
let color2 = document.querySelector('.color-2');
let body = document.getElementById('gradient');
let firstCss = document.querySelector('h3');
let secondCss = document.getElementsByTagName('h3')[1];
let resetButton = document.createElement('button');

resetButton.textContent = 'Reset';
document.body.appendChild(resetButton);
resetButton.style.background = 'maroon';
resetButton.style.color = 'white';
resetButton.style.padding = '10px 35px';
resetButton.style.borderRadius = '10px';



function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value +', ' + color2.value + ')';
    firstCss.textContent = body.style.background + ';';
    secondCss.textContent = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ');';
}

function resetGradient() {
    body.style.background = 'linear-gradient(to right,red, yellow)';
    color1.value = '#00ff00';
    color2.value = '#ff0000';
    firstCss.textContent = '';
    secondCss.textContent = '';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
resetButton.addEventListener('click', resetGradient);
