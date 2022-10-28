var currentDay = $('#currentDay');
var timeBlocks = $('.container');
var hourRow = $('.hour');





function displayDay () {
    var today = moment().format("[Today is] dddd, MMMM Do YYYY");
    console.log(today);
    currentDay.text(today);
}

displayDay();

function checkHour () {
    var currentHour = moment().format("hh:mm:ss");
    console.log(currentHour);
}

checkHour();