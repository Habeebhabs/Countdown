const day = document.querySelector('.days');
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
const birthDay = '27 Jan 2022';

const countDown = () => {
    const currentDate = new Date();
    const birthDayDate = new Date(birthDay);
    const totalDifference = (birthDayDate - currentDate) / 1000;
    const totalDays = Math.floor(totalDifference / 86400);
    const totalHours = Math.floor(totalDifference / 3600) % 24;
    const totalMinutes = Math.floor(totalDifference / 60) % 60;
    const totalSeconds = Math.floor(totalDifference) % 60;
    console.log(totalDifference,totalDays,totalHours,totalMinutes,totalSeconds);
    day.textContent = totalDays;
    hour.textContent = totalHours;
    minute.textContent = totalMinutes;
    second.textContent = totalSeconds;
}
countDown();
setInterval(countDown, 1000);