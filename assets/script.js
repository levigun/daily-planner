// Query Selectors
var saveButton = document.querySelectorAll(".save-button");
var inputHour = $(".todo-input");
var form = $("form");

// created a function to get the user input from the local storage
function getUserInputFromLocalStorage() {
     // use the or || to make sure both are objects 
    return JSON.parse((localStorage.getItem("userInput"))) || {};
}

// created a function to get the text from each timeblock
function getHourText(hour) {
    var userInputs = getUserInputFromLocalStorage();
    return userInputs['hour' + hour] || "";

}

// created a function to save the user input
function saveInput(hour, content) {
    console.log(hour);
    // getting the user input
    var userInput = getUserInputFromLocalStorage();
    userInput['hour' + hour] = content;

    // make the user input into a string
    var userInputSerialized = JSON.stringify(userInput);
    // set to local storage
    localStorage.setItem("userInput", userInputSerialized);

    // get the item from local storage
    var userInputSerialized = getUserInputFromLocalStorage();
    console.log(userInputSerialized);

};

// for each every save button
saveButton.forEach(function (saveButton) {

    // put in the input value
    var textBox = saveButton.previousElementSibling;

    // get the local storage
    textBox.value = getHourText(textBox.id);;


    
    // create a click event listener for the button
    saveButton.addEventListener("click", function (event) {
        // event.target ==> the element that fired the event
        // event.currentTarget is the element that u called the 'addEventListener'
        var element = event.currentTarget;
        var textBox = element.previousElementSibling
        // prevent default of reloading for the click event
        event.preventDefault();
        console.log(element);
        console.log(textBox);

        // saving the user input in the textbox and stays in page
        var hour = $(textBox).attr('id');
        saveInput(hour, textBox.value);


    });

    // add current day to header with moment.js
    var today = moment();
    $("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

    // create current time var
    var currentHour = moment().hour();
    console.log(currentHour);


    // for loop each inputhour with its length
    for (var i = 0; i < inputHour.length; i++) {

        // created an if condition
        // input hours index's id is compared to determine the time block current
        // when the time is the same, the block will be red
        if (currentHour == inputHour[i].id) {
            console.log(currentHour);
            console.log("id", inputHour[i].id);
            $("#" + (inputHour[i].id)).addClass("present");

            // when the current hour is smaller value, the color is green
        } else if (currentHour < inputHour[i].id) {
            console.log(currentHour);
            console.log("id", inputHour[i].id);
            $("#" + (inputHour[i].id)).addClass("future");

            // else the color will be light gray
        } else {
            console.log(currentHour);
            console.log("id", inputHour[i].id);
            $("#" + (inputHour[i].id)).addClass("past");
        }
    }
});
