// Query Selectors
var saveButton = document.querySelector(".save-button");
var toDoInput = document.querySelector(".todo-input");

// prevent default of reloading for the click event
saveButton.addEventListener ("click", function (event) {
    event.preventDefault();
    console.log(toDoInput.value)


// after an event has been entered, the save button is clicked
// saved to local storage

localStorage.setItem('toDoInput', JSON.stringify(toDoInput.value));
    
});


function saveEvent() {
    return localStorage.getItem('toDoInput', JSON.parse((toDoInput.value)));
}

// when refreshed, the events are still there

// when the date has changed, everything is gone
// localStorage.clear();

// add current day to header with moment.js
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// create current time var
var currentHour = moment().format("h A");
var hour = $(".hour");

// div of each time block is compared to current time
// when it is the current time, the box is red
if (currentHour == hour) {
    $(".todo-input").css({ "background-color": "red", "color": "black" });
}

// when it is the time after, the box is green
if (currentHour < hour) {
    $(".todo-input").css({ "background-color": "#77dd77", "color": "black" });
}

// when it is the time prior, the box is light gray
if (currentHour > hour) {
    $(".todo-input").css({ "background-color": "#d3d3d3", "color": "black" });
}

// when the time is not shown in .hour, it will not do anything

// when the day has changed, the whole page reloads and nothing is shw.

