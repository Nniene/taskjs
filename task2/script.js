const consoleLog = document.querySelector('#consoleLog');
const primerConsole = document.querySelector('#console'); 
const primerAlert = document.querySelector('#alert');
const primerPrompt = document.querySelector('#prompt');
const alertFirst = document.querySelector('#alertFirst');
const promptFirst = document.querySelector('#promptFirst');


consoleLog.addEventListener('click', makeConsole);
function makeConsole () {
    alert ('Метод для выведения текста в консоль');
}
primerConsole.addEventListener('click', redactorConsole);
function redactorConsole () {
    alert('В консоли появился текст');
    console.log ('Пример использования команды console.log');    
}
primerAlert.addEventListener('click', redactorAlert);
function redactorAlert () {
    alert('Пример использования команды alert');
}
primerPrompt.addEventListener('click', redactorPrompt);
function redactorPrompt () {
    prompt('Пример использования команды prompt');
}
alertFirst.addEventListener ('click', makeAlert);
function makeAlert () {
    alert ('Метод с помощью которого можно вывести на экран пользователя модальное окно с каким-нибудь текстом');
}
promptFirst.addEventListener ('click', makePrompt);
function makePrompt () {
    alert ('Метод с помощью которого можно вывести на экран пользователя модальное окно c полем ввода и текстом-пояснением');
}

