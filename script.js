"use strict";

// Create an array from nodelist
let bar = document.querySelectorAll(".bar");
let arrayofbars = Array.from(bar)

// randomize height of each bar
bar.forEach(setheight)

function setheight(bar) {
    function getnumberofcustomers() {
        return Math.floor(Math.random() * 32);
    }
    let queuesize = getnumberofcustomers();
    bar.style.height = queuesize * 5 + "px";
    console.log(queuesize)
}

// add and remove bar
window.addEventListener('load', removeandadd)

function removeandadd() {
    setInterval(function () {

        // remove first bar
        let removeone = arrayofbars.shift()
        removeone.remove();

        // add new one at the end
        let newbar = document.createElement("div");
        document.querySelector("body > div").appendChild(newbar);
        newbar.classList.add("bar");
        // randomize height of new bar

        function getnumberofcustomers() {
            return Math.floor(Math.random() * 32);
        }
        let queuesize = getnumberofcustomers();
        newbar.style.height = queuesize * 5 + "px";
        arrayofbars.push(newbar);
        console.log(queuesize)
    }, 1000);
}