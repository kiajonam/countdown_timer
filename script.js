const messageEl = document.getElementById("message");
const daysEl = document.getElementById("days");
const minsEl = document.getElementById("mins");
const hoursEl = document.getElementById("hours");
const secondsEl = document.getElementById("seconds");

const newYearDate = "30 Apr 2026";
function countDown(){

const newDate = new Date(newYearDate);
const currenDate = new Date();

const totalSeconds = (newDate - currenDate) / 1000;

if(totalSeconds <= 0) {
    messageEl.innerHTML = "HAPPY NEW YEAR💥😉";
    document.querySelector(".contdown-container").style.display = "none";
    document.querySelector("h1").style.display = "none";
    clearInterval(timer);
    return;
}

// hi im
const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds / 60) % 24;
const mins = Math.floor(totalSeconds / 60) % 60;
const seconds = Math.floor(totalSeconds) % 60;

 daysEl.innerHTML  =  days 
 hoursEl.innerHTML  = dateFormat(hours) 
 minsEl.innerHTML =  dateFormat(mins) 
secondsEl.innerHTML = dateFormat(seconds) 

function dateFormat(timer) {
    return timer < 10 ? `0${timer}` : timer;
} 
}

countDown();
const timer = setInterval(countDown, 1000);




















/*const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const messageEl = document.getElementById('message');
const newYear = '13 Mar 2026';

function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    
    if(totalSeconds <= 0) {
        messageEl.innerHTML = "🎉 HAPPY NEW YEAR";
         document.querySelector(".contdown-container").style.display = "none";
        clearInterval(timer);
        return;
       
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 60) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60; 



daysEl.innerHTML = days;
hoursEl.innerHTML = timeFormat(hours);
minsEl.innerHTML = timeFormat(mins);
secondsEl.innerHTML = timeFormat(seconds); 

}

function timeFormat(timer) {
    return timer < 10 ? `0${timer}` : timer;
}

countDown();
const timer = setInterval(countDown, 1000);

const messageEl = document.getElementById("message");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYearDate = "14 Apr 2026";

function contdown(){
    const newYear = new Date(newYearDate);
    const currentDate = new Date();

    const totalSeconds = (newYear - currentDate) / 1000; 
    if(totalSeconds <= 0){
        messageEl.innerHTML = "HAPPY NEW YEAR"
        document.querySelector(".contdown-container").style.display = "none";
        document.querySelector("h1").style.display = "none";
        clearInterval(timer);
        return;
    }
const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds / 60) % 24;
const mins = Math.floor(totalSeconds / 60) % 60;
const seconds = Math.floor(totalSeconds) % 60;

daysEl.innerHTML = days
hoursEl.innerHTML = dateFormat(hours)
minsEl.innerHTML = dateFormat(mins)
secondsEl.innerHTML = dateFormat(seconds)
}

function dateFormat(timer){
  return timer < 10 ? `0${timer}` : timer;  
}

contdown();
const timer = setInterval(contdown, 1000);


*/