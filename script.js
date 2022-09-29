document.addEventListener("DOMContentLoaded", () => {

    currentTime();
    todaysDate();
    setInterval(currentTime, 1000);
    setInterval(todaysDate, 1000);

})


let date = new Date();

const getCurrentHour = () => {
    const hours = date.getHours();
    return (hours > 12) ? hours - 12
        : (hours < 10) ? `0${hours}`
            : (hours == 0) ? 12
                : hours;
}


const getCurrentMinute = () => {
    const minutes = date.getMinutes();
    return (minutes < 10) ? `0${minutes}` : minutes;

}

const getCurrentSecond = () => {
    const seconds = date.getSeconds();
    return (seconds < 10) ? `0${seconds}` : seconds;

}

const amOrPm = () => (date.getHours() >= 12) ? "pm" : "am";

function currentTime() {
    date = new Date();
    document.getElementById('clock').innerHTML = `
    ${getCurrentHour()}:${getCurrentMinute()}:${getCurrentSecond()}`;
    document.getElementById("am-pm").innerText = `${amOrPm()}`
}

// ************************************************ //

const currentDay = () => {

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const day = dayNames[date.getDay()];
    return day;
}

const currentMonth = () => {

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];
    return month;
}


const currentDate = date.getDate();

const dateAppender = (currentDate) => {

    return (currentDate === 1 || currentDate === 21 || currentDate === 31) ?
        `${currentDate}st`
        : (currentDate === 2 || currentDate === 22) ? `${currentDate}nd`
            : (currentDate === 3 || currentDate === 23) ? `${currentDate}rd`
                : `${currentDate}th`;
}

const currentYear = date.getFullYear();

const todaysDate = () => {
    return document.getElementById("date").innerHTML = currentDay() + ", " + currentMonth() + " " + dateAppender(currentDate) + " " + currentYear;
}

