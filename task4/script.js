const https = document.querySelector ('a');
https.addEventListener ('click', writeText);
function writeText () {
    let text = prompt ();
    https.textContent = text ; 
    event.preventDefault();
    
}
