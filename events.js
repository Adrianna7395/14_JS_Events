/********  Variablen **********/
const btn = document.getElementById("trigBtn");
let appStatus =true;

/********  Event-Listener **********/

btn.addEventListener("click",toogleAppStatus);

/********  Business-Logic | Toggle **********/
function toogleAppStatus() {
    appStatus = !appStatus; 
    output(appStatus);
}



/* Tools */
function output(outputData) {
    console.log(outputData);
}