const day = document.getElementById('day');
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const targetDate = new Date("Jul 14 2026 08:40:00");
// console.log(targetDate);

const countDown = (targetDate)  => {
    setInterval(() => updateCountDown(targetDate), 1000)
}
countDown(targetDate);

const updateCountDown = (deadline) => {
    const currentDate = new Date();
    const timeDifference = deadline - currentDate; // millisecond
    // console.log(timeDifference);

    // calculate day, hour, mini, sec
    let calSec = Math.floor(timeDifference/1000) % 60;
    let calMin = Math.floor(timeDifference/1000/60) % 60;
    let calHour = Math.floor(timeDifference/1000/60/60) % 24;
    let calDay = Math.floor(timeDifference/1000/60/60/24);
    // console.log(calHour);

    // Display the Time
    sec.textContent = calSec;
    min.textContent = calMin;
    hour.textContent = calHour;
    day.textContent = calDay;
}

