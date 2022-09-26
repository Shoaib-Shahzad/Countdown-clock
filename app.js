let daysitem = document.querySelector("#days");
let hoursitem = document.querySelector("#hour");
let minitem = document.querySelector("#min");
let secitem = document.querySelector("#sec");


let countDown = () => {
    let futuredate = new Date ("1 jan 2023");
    let currentdate = new Date();
    let todaydate = futuredate - currentdate;
    
    let days = Math.floor(todaydate / 1000 / 60 / 60 / 24);

    let hours = Math.floor(todaydate / 1000 / 60 / 60) % 24;

    let minute = Math.floor(todaydate / 1000 / 60) % 60;

    let secod = Math.floor(todaydate / 1000) % 60;
    
    daysitem.innerHTML = days;
    hoursitem.innerHTML = hours;
    minitem.innerHTML = minute;
    secitem.innerHTML = secod;
    setInterval(countDown, 1000);
}
countDown();
