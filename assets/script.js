// Query Selectors
var saveButton = document.querySelector(".save-button");
var toDoInput = document.querySelector(".todo-input");

// prevent default of reloading for the click event
// TODO: forloop each button
saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(toDoInput.value)

    // after an event has been entered, the save button is clicked
    // saved to local storage

    localStorage.setItem('hour', JSON.stringify(toDoInput.value));

});


function saveEvent() {
    return localStorage.getItem('hour', JSON.parse((toDoInput.value)));
}

// const buttons = document.querySelectorAll(".save-button");
// buttons.forEach(function(button){
//   button.addEventListener("click", function(event){
    // ...
//   })
// })

// when refreshed, the events are still there

// when the date has changed, everything is gone
// localStorage.clear();


// add current day to header with moment.js
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// create current time var
var currentHour = moment().hour();
console.log(currentHour);

// create input hour var from each timeblock
var inputHour = $(".todo-input");
console.log(inputHour);


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


// when the day has changed, the whole page reloads and nothing is shown.

