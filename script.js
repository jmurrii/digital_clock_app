let d = new Date();

// code to display time

// let time = new Date();


// One function to get the time and display it

function currentTime() {
    let time = new Date()

    // workout hours
    let hours = time.getHours();

    if (hours > 12) {
        hours = hours - 12;
    } else if (hours == 0) {
        hours = 12;
    }

    // if (hours < 10) {
    //     hours = `0${hours}`;
    // }

    let minutes = time.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let seconds = time.getSeconds();
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    let theTimeisNow = hours + ":" + minutes + ":" + seconds;
    console.log(theTimeisNow);
    if (time.getHours() >= 12) {
        theTimeisNow = theTimeisNow + "pm";
    } else {
        theTimeisNow = theTimeisNow + "am";
    }

    return document.getElementById('clock').innerHTML = theTimeisNow;


}

setInterval(currentTime, 1000);











// Code to display day, date, month, year

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let currentDay = dayNames[d.getDay()];



// Code to change abbreviated month name to full month name
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentMonth = monthNames[d.getMonth()];





let currentDate = d.getDate();

function dateAppender(currentDate) {

    if (currentDate === 1 || currentDate === 21 || currentDate === 31) {
        return `${currentDate}st`;
    } else if (currentDate === 2 || currentDate === 22) {
        return `${currentDate}nd`;
    } else if (currentDate === 3 || currentDate === 23) {
        return `${currentDate}rd`;
    } else {
        return `${currentDate}th`;
    }
}


let currentYear = d.getFullYear();




document.getElementById("date").innerHTML = currentDay + ", " + currentMonth + " " + dateAppender(currentDate) + " " + currentYear;

