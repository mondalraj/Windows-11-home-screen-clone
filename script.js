const startWindow = document.querySelector('.start-window');
const start = document.querySelector('.start');
const search = document.querySelector('.search');
const searchWindow = document.querySelector('.search-window');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const day = document.querySelector('.date');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

setInterval(setDateAndTime, 1000);

start.addEventListener('click', e => {
    startWindow.classList.toggle('active-start');
    searchWindow.classList.remove('active-search');
    console.log("Start Clicked");
});

search.addEventListener('click', e => {
    searchWindow.classList.toggle('active-search');
    startWindow.classList.remove('active-start');
    console.log("Search Clicked");
});

function setDateAndTime() {
    const date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    day.innerHTML = date.getDate();
    month.innerHTML = date.getMonth();
    year.innerHTML = date.getFullYear();
    console.log(date);
};
