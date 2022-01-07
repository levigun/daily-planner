// Query Selectors
var saveButton = document.querySelector(".save-button");
var toDoInput = document.querySelector(".todo-input");
var hour = $(".hour");

// prevent default of reloading for the click event
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

// when refreshed, the events are still there

// when the date has changed, everything is gone
// localStorage.clear();

// add current day to header with moment.js
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// create current time var
var currentHour = moment().format("h A");
var splittedHour = hour.split("")[0];
    console.log(splittedHour)

// div of each time block is compared to current time
// when it is the current time, the box is red
if (currentHour == hour) {
    $(".todo-input").addClass("present");

    // when it is the time after, the box is green
} else if (currentHour < hour) {

    $(".todo-input").addClass("future");

} else {

    // when it is the time prior, the box is light gray
    $(".todo-input").addClass("past");
}

// when the time is not shown in .hour, it will not do anything

// when the day has changed, the whole page reloads and nothing is shw.

