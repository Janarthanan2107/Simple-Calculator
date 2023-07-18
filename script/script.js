// Get the input element
var input = document.getElementById("input");

// Get all the number buttons
var numberButtons = document.querySelectorAll(".btn.number");

// Get all the action buttons
var actionButtons = document.querySelectorAll(".btn.action");

//Get all the action cancel
var cancel = document.getElementById("cancel")

// Get the equal button
var equalButton = document.querySelector(".equalto-container");

document.addEventListener("DOMContentLoaded", function () {
    // Add click event listeners to number buttons
    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            input.value += button.innerText;
        });
    });

    // Add click event listeners to action buttons
    actionButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            input.value += " " + button.innerText + " ";
        });
    });

    cancel.addEventListener("click", function () {
        input.value = "";
    });

    // Add click event listener to equal button
    equalButton.addEventListener("click", function () {
        var expression = input.value;
        var result = eval(expression);
        input.value = result;
    });
});
