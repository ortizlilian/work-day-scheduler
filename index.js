// Displays the current time and date in the jumbutron 
$("#currentDay").text(moment().format('MMMM Do YYYY, LTS'));

// Stores all .timeblock divs into a variable
var timeblocks = $('.timeblock');

// Loop through timeblocks array and set div's background accordingly
timeblocks.each(function(index, value) {
    
    // Variable that stores the current hour
    let thisHour = moment().format('H');

    // Variable that stores the data-hour attribute
    let hour = Number(value.dataset.hour);

    // if statement that sets the different background colors acordding to
    // current time
    if (hour < thisHour) {
        $(this).css({'background-color': '#bfbfbf'});            
    } else if (hour == thisHour) {
        $(this).css({'background-color': '#f54242'});
    } else {
        $(this).css({'background-color': '#42f55d'});            
    }
});

// Gets input and ID and saves it to local storage
$("button").on("click", function() {
    localStorage.setItem($(this).attr("data-buttonform"), $("#" + $(this).attr("data-buttonform")).val());
});

// Retrieves input and ID from local storage
$("textarea.form-control").each(function(index, value) {
    $(this).text(localStorage.getItem($(this).attr("id")));
});