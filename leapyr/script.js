const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dateEl = document.getElementById("date");
const textEl = document.getElementById("text");
const btnEl = document.getElementById("btn");

function leapYear() {
  const year = Number(yearEl.value);

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    textEl.innerText = "Leap year";
  } else {
    textEl.innerText = "Not a leap year";
  }
}
