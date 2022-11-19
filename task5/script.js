let writeText = document.querySelector('input');
let usresText = document.querySelector('#duplicateField');
const knopka = document.querySelector('button');
addEventListener('keyup', (event) => {
    usresText.textContent = writeText.value;

});
knopka.addEventListener('click', doTask);
function doTask () {
    console.log (writeText.value);
    writeText.value = ""; 
    usresText.textContent = writeText.value;
    event.preventDefault();
}
