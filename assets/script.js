//display current day & time.
$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
});