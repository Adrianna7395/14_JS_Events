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

/********  View-Schicht **********/





// Modul: Umschaltung Klassenamen | Test:
// switchClassName("night");
// switchClassName("day");
function switchClassName(modeStr) {  

     // Kritik: wenig robust, da starre Indexierung
    document.body.className = modeStr; 
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;

}




/* Tools */
function output(outputData) {
    console.log(outputData);
}