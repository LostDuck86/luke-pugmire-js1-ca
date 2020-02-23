const timeout = document.querySelector(".container.content");



function replace () {
    timeout.innerHTML = timeout.innerHTML.replace(/The/g, "Replaced");
    timeout.innerHTML = timeout.innerHTML.replace(/the/g, "replaced");
   
}
setTimeout(replace, 4000);