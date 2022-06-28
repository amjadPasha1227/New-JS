function realTimeClock(){

let HRS = document.getElementById("hours"),
MTS = document.getElementById("minutes"),
SEC = document.getElementById("seconds"),
DATE = document.getElementById("date");
MONTH = document.getElementById("month");
YEAR = document.getElementById("year");

HRS.innerHTML = new Date().getHours();
MTS.innerHTML = new Date().getMinutes();
SEC.innerHTML = new Date().getSeconds();
DATE.innerHTML = new Date().getDate();
MONTH.innerHTML = new Date().getMonth();
YEAR.innerHTML = new Date().getFullYear();
var t = setTimeout(realTimeClock, 500);

}



