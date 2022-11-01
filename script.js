var currentDay = $('#currentDay');
var container = $('.container');
var timeBlock = $('.row');
var hour = $('.hour');
let currentHour = moment().hour();
var saveBtn = $('.saveBtn');




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
      let addEvent = $(this).children(".description");
  
      // Compares the div element that has data-hour attribute to current time
      if (currentHour > rowHourAsInt) {
        // Adds a new class to the row with class .row
        $(this).addClass("past");
        // Adds a new class to the event area with class .description
        addEvent.addClass("past");
      } else if (currentHour < rowHourAsInt) {
        $(this).addClass("future");
        addEvent.addClass("future");
      } else {
        $(this).addClass("present");
        addEvent.addClass("present");
      }
    });
  }
  
  checkHour();


saveBtn.on("click", function () {
  var userEvent = document.querySelector(".description").value;

  localStorage.setItem("user-event", userEvent);

  var storedEvent = localStorage.getItem("user-event", userEvent);
  console.log(storedEvent);
});














