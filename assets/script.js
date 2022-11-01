var currentDay = $('#currentDay');
var container = $('.container');
var timeBlock = $('.row');
var hour = $('.hour');
var eventArea = $('.description');
let currHour = moment().hour();
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
    //   console.log(this);
    });
  }
  
  checkHour();


saveBtn.on("click", function () {
  var userEvent = document.querySelector(".description").value;

  localStorage.setItem("user-event", userEvent);

  var storedEvent = localStorage.getItem("user-event", userEvent);
  console.log(storedEvent);
});

// function saveToStorage(row) {
//     // Might need to check for empty text box
//     let rowInputValue = row.children(".description").val();
//     // Gets the data-hour attribute value of the current row
//     let rowHour = row.children("div").attr("data-hour");
//     // The data-hour attribute is used to tie the localstorage to that particular time slot
//     localStorage.setItem(rowHour, rowInputValue);
//   }

// saveBtn.on("click", function() {
//     let rowDivs = $(".container").children();
//     rowDivs.each(function () {
//       // Represents a individual div element of the current row
//       let rowHour = $(this).children("div");
//     //   let rowHourAsInt = parseInt(rowHour.attr("data-hour"));
  
//       // Represents a individual input element of the current row with
//       // description
//       let rowInputValue = $(this).children(".description").val();
//       console.log(rowInputValue);


// }
// )











