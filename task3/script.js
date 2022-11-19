let trafficLightEl = document.querySelector('#trafficLight1');
let all = document.querySelector('#all');
let trafficLightE2 = document.querySelector('#trafficLight2');
let trafficLightE3 = document.querySelector('#trafficLight3');


function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
    all.removeEventListener('click', makeGreen);
    all.addEventListener ('click', makeYellow);
 }
 all.addEventListener ('click', makeGreen);
 function makeYellow() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('yellow');
    trafficLightE3.style.background = ('black');
    all.removeEventListener('click', makeYellow);
    all.addEventListener ('click', makeRed);
     
 }
 function makeRed() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('red');
    all.removeEventListener('click', makeRed);
    all.addEventListener ('click', makeGreen);
 }

