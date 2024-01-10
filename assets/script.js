// Current date
$("#currentDay").text(dayjs().format("dddd[,] MMMM DD"));

//create variable of currentHour to compare vals in if/else if statement
const currentHour = (dayjs().hour());

//Save text input to local storage

const saveButton = $(".saveBtn")

saveButton.on("click", function(event) {
    event.preventDefault();
    var task = event.target.previousElementSibling.value;
    var hourBlock = event.target.getAttribute("data-hour");
    localStorage.setItem(hourBlock, task);
});

//Display values from local storage to text areas:

$("#task1").val(localStorage.getItem("9"));
$("#task2").val(localStorage.getItem("10"));
$("#task3").val(localStorage.getItem("11"));
$("#task4").val(localStorage.getItem("12"));
$("#task5").val(localStorage.getItem("13"));
$("#task6").val(localStorage.getItem("14"));
$("#task7").val(localStorage.getItem("15"));
$("#task8").val(localStorage.getItem("16"));
$("#task9").val(localStorage.getItem("17"));

//Check current time against time block to style text areas:

$(".time-block").each(function() {
    var dataHours = $(this).children(".saveBtn").attr("data-hour");
    if(dataHours<currentHour) {
        $(this).children("textarea").addClass("past");
    } else if(dataHours===currentHour) {
        $(this).children("textarea").addClass("present");
    } else {
        $(this).children("textarea").addClass("future");
    }
});