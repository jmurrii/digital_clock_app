let d = new Date();


// console.log(d.getDay());

// document.getElementById("date").innerHTML = d.getDay();

//  Code to change abbreviated day name to full name

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let currentDay = dayNames[d.getDay()];
console.log(currentDay);



// Code to change abbreviated month name to full month name
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentMonth = monthNames[d.getMonth()];
console.log(currentMonth);




let currentDate = d.getDate();

function dateAppender(currentDate) {

    if (currentDate === 1) {
        return `${currentDate}st`;
    } else if (currentDate === 2) {
        return `${currentDate}nd`;
    } else if (currentDate === 3) {
        return `${currentDate}rd`;
    } else {
        return `${currentDate}th`;
    }
}
console.log(dateAppender(currentDate));


let currentYear = d.getFullYear();
console.log(currentYear);



document.getElementById("date").innerHTML = currentDay + ", " + currentMonth + " " + dateAppender(currentDate) + " " + currentYear;

