//const container = document.querySelector('div');
//console.log(container)

const button = document.querySelector('.roc');

console.log (button)

function hola() {
alert('Hola !');
}
 
if (button) {
    button.addEventListener("click", hola);
}


let player = document.getElementById('player');
console.log(player);

player.innerText ++;

let computer = document.getElementById('computer');
