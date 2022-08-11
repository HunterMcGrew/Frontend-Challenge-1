// start of code 

// Update the details on the card as the user fills in the fields
// Validate the form fields when the form is submitted
// If there are no errors, display the completed state
// Reset the form when the user clicks "Continue" on the completed state

// global variables from page
let num1 = document.getElementById("num1");
let numInput = document.getElementById("numInput");
let cardName = document.getElementById("nameOnCard");
let nameInput = document.getElementById("namesInput");
let month = document.getElementById("month");
let monthInput = document.getElementById("monthDate");
let year = document.getElementById("yearDate");
let yearInput = document.getElementById("yearInput");
let cvc = document.getElementById("cvcNum");
let cvcInput = document.getElementById("cInput");
let button = document.querySelector(".button");

// global vars for checking info
let cvcInfo = ""; // comes out as a string when saved
let nameInfo = "";
let numberInfo = "";
let monthInfo = "";
let yearInfo = "";


numInput.addEventListener("input", () => {
    // inputs a space after ever 4th number using regex
    numInput.value = numInput.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    num1.innerHTML = numInput.value;
});

nameInput.addEventListener("input", () =>{
    cardName.innerHTML = nameInput.value.toUpperCase();
    nameInfo = cardName.innerHTML;
});

monthInput.addEventListener("input", () => {
    month.innerHTML = monthInput.value;
    monthInfo = month.innerHTML;
})

yearInput.addEventListener("input", () => {
    year.innerHTML = yearInput.value;
    yearInfo = year.innerHTML;
});

cvcInput.addEventListener("input", () => {
    cvc.innerHTML = cvcInput.value;
    cvcInfo = cvc.innerHTML;
});


button.addEventListener("click", () => {
    // add check functions here.

    window.location.replace("success.html");
})
