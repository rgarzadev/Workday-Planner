//populate current date in header
$("#currentDay").html(moment().format("MMMM Do YYYY, h:mm:ss a"));

//current hour
var currentHour = moment().startOf("hour");

//9am
var nineAm = moment().startOf("day").add(9, "h");

if (nineAm.isSame(currentHour)) {
    $("#nine-appt").addClass("present");
}
else if (nineAm.isBefore(currentHour)) {
    $("#nine-appt").addClass("past");
}
else {
    $("#nine-appt").addClass("future");
}

//10am
var tenAm = moment().startOf("day").add(10, "h");

if (tenAm.isSame(currentHour)) {
    $("#ten-appt").addClass("present");
}
else if (tenAm.isBefore(currentHour)) {
    $("#ten-appt").addClass("past");
}
else {
    $("#ten-appt").addClass("future");
}

//11am
var elevenAm = moment().startOf("day").add(11, "h");

if (elevenAm.isSame(currentHour)) {
    $("#eleven-appt").addClass("present");
}
else if (elevenAm.isBefore(currentHour)) {
    $("#eleven-appt").addClass("past");
}
else {
    $("#eleven-appt").addClass("future");
}

//12pm
var twelvePm = moment().startOf("day").add(12, "h");

if (twelvePm.isSame(currentHour)) {
    $("#twelve-appt").addClass("present");
}
else if (twelvePm.isBefore(currentHour)) {
    $("#twelve-appt").addClass("past");
}
else {
    $("#twelve-appt").addClass("future");
}

//1pm
var onePm = moment().startOf("day").add(13, "h");

if (onePm.isSame(currentHour)) {
    $("#one-appt").addClass("present");
}
else if (onePm.isBefore(currentHour)) {
    $("#one-appt").addClass("past");
}
else {
    $("#one-appt").addClass("future");
}

//2pm
var twoPm = moment().startOf("day").add(14, "h");

if (twoPm.isSame(currentHour)) {
    $("#two-appt").addClass("present");
}
else if (twoPm.isBefore(currentHour)) {
    $("#two-appt").addClass("past");
}
else {
    $("#two-appt").addClass("future");
}

//3pm
var threePm = moment().startOf("day").add(15, "h");

if (threePm.isSame(currentHour)) {
    $("#three-appt").addClass("present");
}
else if (threePm.isBefore(currentHour)) {
    $("#three-appt").addClass("past");
}
else {
    $("#three-appt").addClass("future");
}

//4pm
var fourPm = moment().startOf("day").add(16, "h");

if (fourPm.isSame(currentHour)) {
    $("#four-appt").addClass("present");
}
else if (fourPm.isBefore(currentHour)) {
    $("#four-appt").addClass("past");
}
else {
    $("#four-appt").addClass("future");
}

//5pm
var fivePm = moment().startOf("day").add(17, "h");

if (fivePm.isSame(currentHour)) {
    $("#five-appt").addClass("present");
}
else if (fivePm.isBefore(currentHour)) {
    $("#five-appt").addClass("past");
}
else {
    $("#five-appt").addClass("future");
}

//6pm
var sixPm = moment().startOf("day").add(18, "h");

if (sixPm.isSame(currentHour)) {
    $("#six-appt").addClass("present");
}
else if (sixPm.isBefore(currentHour)) {
    $("#six-appt").addClass("past");
}
else {
    $("#six-appt").addClass("future");
}

//7PM
var sevenPm = moment().startOf("day").add(19, "h");

if (sevenPm.isSame(currentHour)) {
    $("#seven-appt").addClass("present");
}
else if (sevenPm.isBefore(currentHour)) {
    $("#seven-appt").addClass("past");
}
else {
    $("#seven-appt").addClass("future");
}

//8PM
var eightPm = moment().startOf("day").add(20, "h");

if (eightPm.isSame(currentHour)) {
    $("#eight-appt").addClass("present");
}
else if (eightPm.isBefore(currentHour)) {
    $("#eight-appt").addClass("past");
}
else {
    $("#eight-appt").addClass("future");
}

//---------------------------------------------------

//recall and save data for each hour to local storage

//9am

//if data at nine, populate text area
if(localStorage.getItem("nine-appt")) {
    $("#nine-appt").val(localStorage.getItem("nine-appt"));
}

//on nine save button click, save text area value to local storage 
$("#nine-btn").click(function() {
    var nine_appt = $("#nine-appt").val();
    localStorage.setItem("nine-appt", nine_appt);
})

//10am

//if data at ten, populate text area
if(localStorage.getItem("ten-appt")) {
    $("#ten-appt").val(localStorage.getItem("ten-appt"));
}

//on ten save button click, save text area value to local storage 
$("#ten-btn").click(function() {
    var ten_appt = $("#ten-appt").val();
    localStorage.setItem("ten-appt", ten_appt);
})

//11am

//if data at eleven, populate text area
if(localStorage.getItem("eleven-appt")) {
    $("#eleven-appt").val(localStorage.getItem("eleven-appt"));
}

//on eleven save button click, save text area value to local storage 
$("#eleven-btn").click(function() {
    var eleven_appt = $("#eleven-appt").val();
    localStorage.setItem("eleven-appt", eleven_appt);
})

//12pm

//if data at twelve, populate text area
if(localStorage.getItem("twelve-appt")) {
    $("#twelve-appt").val(localStorage.getItem("twelve-appt"));
}

//on twelve save button click, save text area value to local storage 
$("#twelve-btn").click(function() {
    var twelve_appt = $("#twelve-appt").val();
    localStorage.setItem("twelve-appt", twelve_appt);
})

//1pm

//if data at one, populate text area
if(localStorage.getItem("one-appt")) {
    $("#one-appt").val(localStorage.getItem("one-appt"));
}

//on one save button click, save text area value to local storage 
$("#one-btn").click(function() {
    var one_appt = $("#one-appt").val();
    localStorage.setItem("one-appt", one_appt);
})

//2pm

//if data at two, populate text area
if(localStorage.getItem("two-appt")) {
    $("#two-appt").val(localStorage.getItem("two-appt"));
}

//on two save button click, save text area value to local storage 
$("#two-btn").click(function() {
    var two_appt = $("#two-appt").val();
    localStorage.setItem("two-appt", two_appt);
})

//3pm

//if data at three, populate text area
if(localStorage.getItem("three-appt")) {
    $("#three-appt").val(localStorage.getItem("three-appt"));
}

//on three save button click, save text area value to local storage 
$("#three-btn").click(function() {
    var three_appt = $("#three-appt").val();
    localStorage.setItem("three-appt", three_appt);
})

//4pm

//if data at four, populate text area
if(localStorage.getItem("four-appt")) {
    $("#four-appt").val(localStorage.getItem("four-appt"));
}

//on four save button click, save text area value to local storage 
$("#four-btn").click(function() {
    var four_appt = $("#four-appt").val();
    localStorage.setItem("four-appt", four_appt);
})

//5pm

//if data at five, populate text area
if(localStorage.getItem("five-appt")) {
    $("#five-appt").val(localStorage.getItem("five-appt"));
}

//on five save button click, save text area value to local storage 
$("#five-btn").click(function() {
    var five_appt = $("#five-appt").val();
    localStorage.setItem("five-appt", five_appt);
})

//6pm

//if data at six, populate text area
if(localStorage.getItem("six-appt")) {
    $("#six-appt").val(localStorage.getItem("six-appt"));
}

//on six save button click, save text area value to local storage 
$("#six-btn").click(function() {
    var six_appt = $("#six-appt").val();
    localStorage.setItem("six-appt", six_appt);
})

//7pm

//if data at seven, populate text area
if(localStorage.getItem("seven-appt")) {
    $("#seven-appt").val(localStorage.getItem("seven-appt"));
}

//on seven save button click, save text area value to local storage 
$("#seven-btn").click(function() {
    var seven_appt = $("#seven-appt").val();
    localStorage.setItem("seven-appt", seven_appt);
})

//8pm

//if data at eight, populate text area
if(localStorage.getItem("eight-appt")) {
    $("#eight-appt").val(localStorage.getItem("eight-appt"));
}

//on eight save button click, save text area value to local storage 
$("#eight-btn").click(function() {
    var eight_appt = $("#eight-appt").val();
    localStorage.setItem("eight-appt", eight_appt);
})