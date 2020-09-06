// Post the current day and date at the top of the page
var currentDay = moment().format("dddd MMMM Do");

var displayDay = function() {
    $("#currentDay").text(currentDay);
};
displayDay()