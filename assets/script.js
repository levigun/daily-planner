// Query Selector for the save button
var saveButton = $(".save-buttone")

// add current day to header with moment.js
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));