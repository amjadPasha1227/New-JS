function realTimeClock(){

let HRS = document.getElementById("hours"),
MTS = document.getElementById("minutes"),
SEC = document.getElementById("seconds"),
DATE = document.getElementById("date");
MONTH = document.getElementById("month");
YEAR = document.getElementById("year");
DAY = document.getElementById("day");
AMORPM = document.getElementById("amorpm");

hours = new Date().getHours();
if (hours >=12) {
    AMORPM.innerHTML = "PM"
}else{
    AMORPM.innerHTML = "AM"
}

hours = (hours % 12) || 12;
 if (hours < 10) {
    HRS.innerHTML = "0" + hours;
 }else{
    HRS.innerHTML = hours;
 }


//
date_new = new Date().getDate();

if (date_new < 10) {
    DATE.innerHTML = "0" +  date_new;
}else{
    DATE.innerHTML = date_new;
}
//
minutes = new Date().getMinutes();

if (minutes < 10) {
    MTS.innerHTML = "0" + minutes;
}else{
    MTS.innerHTML = minutes;
}

//
seconds = new Date().getSeconds();

if (seconds < 10) {
    SEC.innerHTML = "0" + seconds;
}else{
    SEC.innerHTML = seconds;
}

YEAR.innerHTML = new Date().getFullYear();

let Month_list = new Date().getMonth();

switch (Month_list) {
    case 0:
        Month_list = "JAN"
        break;
    case 1:
        Month_list = "FEB"
        break;
    case 2:
        Month_list = "MAR"
        break;
    case 3:
        Month_list = "APR"
        break;
    case 4:
        Month_list = "MAY"
        break;
    case 5:
        Month_list = "JUN"
        break;
    case 6:
        Month_list = "JUL"
        break;
    default:
        break;
}

MONTH.innerHTML = Month_list;



let Day_list = new Date().getDay();
switch (Day_list) {
    case 0:
        Day_list = "SUNDAY"
        break;
    case 1:
        Day_list = "MONDAY"
        break;
    case 2:
        Day_list = "TUESDAY"
        break;
    case 3:
        Day_list = "WEDNESDAY"
        break;
    case 4:
        Day_list = "THURSDAY"
        break;
    case 5:
        Day_list = "FRIDAY"
        break;
    case 6:
        Day_list = "SATURDAY"
        break;        
    default:
        break;
}
DAY.innerHTML = Day_list;


var t = setTimeout(realTimeClock, 500);
}



