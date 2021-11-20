let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date + ' ' + time;
document.getElementById("currentDay").innerHTML = dateTime;

//setting for save function button
$(document).ready(function(){
 
 $(".saveBtn").on("click", function () {
 
  const description = $(this).siblings('.description').val();
  const time = $(this).parent().attr('id');
  
 localStorage.setItem(description, time)
  
 });
 
 function colorUpdate() {
  let currentHour = moment().hours();
  $('.time-block').each(function(){
   let blockHour = parseInt($(this).attr('id').split('-')[1]);
   if (blockHour<currentHour) 
   {
    $(".description").addClass("present")
   } else if (myHour[i] < currentHour) {
    $(".description").addClass("past")
   } else {
    $(".description").addClass("future")
   }
  })
  }
 colorUpdate();

 $('#hour-1 .description').val(localStorage.getItem('hour-1'));
 $('#hour-2 .description').val(localStorage.getItem('hour-2'));
 $('#hour-3 .description').val(localStorage.getItem('hour-3'));
 $('#hour-4 .description').val(localStorage.getItem('hour-4'));
 $('#hour-5 .description').val(localStorage.getItem('hour-5'));
 $('#hour-6 .description').val(localStorage.getItem('hour-6'));
 $('#hour-7 .description').val(localStorage.getItem('hour-7'));
 $('#hour-8 .description').val(localStorage.getItem('hour-8'));
 $('#hour-9 .description').val(localStorage.getItem('hour-9'));
 $('#hour-10 .description').val(localStorage.getItem('hour-10'));
})

