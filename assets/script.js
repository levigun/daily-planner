// Query Selectors
var saveButton = $(".save-button");
var toDoInput = $(".todo-input");

// prevent default of reloading for the click event
saveButton.click(function (event) {
    event.preventDefault();

toDoInput.innerText = toDoInput.value;
    
});

localStorage.setItem('toDoInput', JSON.stringify(toDoInput));
saveEvent();

function saveEvent() {
    return JSON.parse(localStorage.getItem("toDoInput"));
}


// after an event has been entered, the save button is clicked
// saved to local storage
// when refreshed, the events are still there

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

