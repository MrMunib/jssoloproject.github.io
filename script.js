// Defining the DOM

let homeEL = document.getElementById("home");
let guestEL = document.getElementById("guest");

let counter1EL = document.getElementById("counter-01");
let counter2EL = document.getElementById("counter-02");



let btn11 = document.getElementById("grp1-box1")
let btn12 = document.getElementById("grp1-box2")
let btn13 = document.getElementById("grp1-box3")


// Reset

let resetEl = document.getElementById("reset")

let btn21 = document.getElementById("grp2-box1")
let btn22 = document.getElementById("grp2-box2")
let btn23 = document.getElementById("grp2-box3")


let homeCount = 0;

btn11.addEventListener("click", function homeAdditionOne() {
    homeCount = homeCount + 1;
    counter1EL.innerText = homeCount
})

btn12.addEventListener("click", function homeAdditionTwo() {
    homeCount = homeCount + 2;
    counter1EL.innerText = homeCount
})

btn13.addEventListener("click", function homeAdditionThree() {
    homeCount = homeCount + 3;
    counter1EL.innerText = homeCount
})


// ************************************************************


let guestCount = 0;

btn21.addEventListener("click", function guestAdditionOne() {
    guestCount = guestCount + 1;
    counter2EL.innerText = guestCount
})

btn22.addEventListener("click", function guestAdditionTwo() {
    guestCount = guestCount + 2;
    counter2EL.innerText = guestCount
})

btn23.addEventListener("click", function guestAdditionThree() {
    guestCount = guestCount + 3;
    counter2EL.innerText = guestCount
})

//  ****************************************************RESET FUCNTION**********************



// ************************** MODAL *******************************************
let modalEL = document.getElementById("modal")
let notifyEL = document.querySelector("#notify")




resetEl.addEventListener("click", function reset() {
    homeCount = 0;
    guestCount = 0;
    counter1EL.innerHTML = "0";
    counter2EL.innerHTML = "0";

    modalEL.style.background = "rgba(116, 112, 112, 0.883)"

    notifyEL.style.display = "inline-block"
})


notifyEL.addEventListener("click", function playNext() {
    modalEL.style.background = "rgba(116, 112, 112, 0)"
    notifyEL.style.display = "none"
})