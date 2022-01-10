// Query Selectors
var saveButton = document.querySelectorAll(".save-button");
var inputHour = $(".todo-input");
var form = $("form");


function getUserInputFromLocalStorage() {
    return JSON.parse((localStorage.getItem("userInput"))) || {};
}

function getHourText(hour) {
    const userInputs = getUserInputFromLocalStorage();
    return userInputs['hour' + hour] || "";

}

function saveInput(hour, content){

    // get the existing data
    // use the or || to make sure both are objects 
    // updated 
    
    console.log(hour);
    var userInput = getUserInputFromLocalStorage();
    userInput['hour' + hour] = content;
    
    
    // and saved again
    
    // get all the value inputed in the timeblocks
    // the written event stays even after other events are written
    
    
    // save to local storage
    var userInputSerialized = JSON.stringify(userInput);
    localStorage.setItem("userInput", userInputSerialized);
    
    var userInputSerialized = JSON.parse((localStorage.getItem("userInput")));
    console.log(userInputSerialized);
    
    
    // when the page reloads,
    // the saved event is still displayed
}

saveButton.forEach(function (saveButton) {

    // put in the input valie
    var textBox = saveButton.previousElementSibling;

    // get the local storaeg
    textBox.value = getHourText(textBox.id);;


    //. event.target ==> the element that fired the event

    // event.currentTarget is the element that u called the 'addEventListener'
    // after an event has been entered, the save button is clicked
    saveButton.addEventListener("click", function (event) {
        var element = event.currentTarget;
        var textBox = element.previousElementSibling
        // prevent default of reloading for the click event
        event.preventDefault();
        console.log(element);
        console.log(textBox);

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
