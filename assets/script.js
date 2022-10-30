var currentDay = $('#currentDay');
// var container = $('.container');
// var timeBlock = $('.row');
var hour = $('.hour');
var eventArea = $('.description');
var currentHour = moment().format("hA");
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

function checkHour () {
    var hourEl = element.getAttribute('data-number');
    console.log(hourEl)
}


saveBtn.on("click", function() {
    var userEvent = document.querySelector(".description").value;
        localStorage.setItem("user-event", userEvent);
    
    var storedEvent = localStorage.getItem("user-event", userEvent);
    console.log(storedEvent);

});











