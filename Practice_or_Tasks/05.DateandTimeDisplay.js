function realTimeClock(){

let HRS = document.getElementById("hours"),
MTS = document.getElementById("minutes"),
SEC = document.getElementById("seconds"),
Date = document.getElementById("date");



HRS.innerHTML = new Date().getHours();
MTS.innerHTML = new Date().getMinutes();
SEC.innerHTML = new Date().getSeconds();
Date.innerHTML = new Date().getDate();
var t = setTimeout(realTimeClock, 500);

}



