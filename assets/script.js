// displays day in header
var currentDay = moment().format("dddd MMMM Do");

var displayDay = function() {
    $("#currentDay").text(currentDay);
};
displayDay()

//function to save text area to local storeage
$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        var saveDescription = $(this).siblings(".description").val();
        var saveHour = $(this).parent().attr("id");
  
        localStorage.setItem(saveHour, saveDescription);
    })
  
    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
  })

  $("textarea").blur()
//function to change color based on time of day
var setColor = function(){
    var taskHour = moment().format("H")
    $("textarea").each(function(){
        var hour = parseInt($(this).attr('data-hour'))
        console.log(hour)
        if(hour == taskHour){
            $(this).addClass('present')
        }
        else if(hour<taskHour){
            $(this).addClass('past')
        }
        else{$(this).addClass('future')}
    })

}
setColor()