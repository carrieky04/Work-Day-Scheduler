var currentDay = $('#currentDay');
var container = $('.container');
var timeBlock = $('.row');
var hour = $('.hour');
var eventArea = $('.description');
let currHour = moment().hour();
var saveBtn = $('.saveBtn');


// function renderHour () {
//     var timeBlocks = [
//     '9AM',
//     '10AM',
//     '11AM',
//     '12PM',
//     '1PM',
//     '2PM',
//     '3PM',
//     '4PM',
//     '5PM',
//     ];

// for (var i = 0; i < timeBlocks.length; i++) {
//     var hourEl = $('<p>');
//     hourEl.attr("data-hour", timeBlocks[i]);
//     hourEl.text(timeBlocks[i]);
//     hour.append(hourEl);
// }}
// renderHour();



function displayDay () {
    var today = moment().format("[Today is] dddd, MMMM Do YYYY");
    console.log(today);
    currentDay.text(today);
}
displayDay();


function checkHour() {
    // Returns an array of rows with class .row
    let rowDivs = $(".container").children();
    rowDivs.each(function () {
      // Represents a individual div element of the current row
      let rowHour = $(this).children("div");
      let rowHourAsInt = parseInt(rowHour.attr("data-hour"));
  
      // Represents a individual input element of the current row with
      // description
      let rowInput = $(this).children(".description");
  
      // Compares the div element that has data-hour attribute to current time
      if (currHour > rowHourAsInt) {
        // Adds a new class to the row with class .row
        $(this).addClass("past");
        // Adds a new class to the input with class .description
        rowInput.addClass("past");
      } else if (currHour < rowHourAsInt) {
        $(this).addClass("future");
        rowInput.addClass("future");
      } else {
        $(this).addClass("present");
        rowInput.addClass("present");
      }
      console.log(this);
    });
  }
  
  checkHour();

saveBtn.on("click", function() {
    var userEvent = document.querySelector(".description").value;
        localStorage.setItem("user-event", userEvent);
    
    var storedEvent = localStorage.getItem("user-event", userEvent);
    console.log(storedEvent);

});











