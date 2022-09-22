let d = new Date();

function currentHour() {
    let hours = d.getHours();
    if (hours > 12) {
        return hours = hours - 12;
    } else if (hours < 10) {
        return `0${hours}`;
    } else if (hours == 0) {
        return 12;
    } else {
        return hours;
    }
}


let currentMinute = () => {
    let minutes = d.getMinutes();
    if (minutes < 10) {
        return minutes = `0${minutes}`;
    } else {
        return minutes;
    }
}


let currentSecond = () => {
    let seconds = d.getSeconds();
    if (seconds < 10) {
        return seconds = `0${seconds}`
    } else {
        return seconds;
    }
}


let amOrPm = () => {
    if (d.getHours() >= 12) {
        return "pm";
    } else if (d.getHours() == 0) {
        return "am";
    } else {
        return "am";
    }
}


let currentTime = () => {
    d = new Date();
    return document.getElementById('clock').innerHTML = `
    ${currentHour()}:${currentMinute()}:${currentSecond()}<span> ${amOrPm()}</span>`;
}

setInterval(currentTime, 1000);



// ************************************************ //
// Code to display day, date, month, year
// Function to retrieve day-name

let currentDay = () => {

    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = dayNames[d.getDay()];
    return day;
}


// Function to change abbreviated month name to full month name

let currentMonth = () => {

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = monthNames[d.getMonth()];
    return month;
}



// Function to append letters to date number

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

// Function to return current year
let currentYear = () => d.getFullYear();


// Call all functions and inject them into HTML document

let todaysDate = () => {
    return document.getElementById("date").innerHTML = currentDay() + ", " + currentMonth() + " " + dateAppender(currentDate) + " " + currentYear();
}

todaysDate();