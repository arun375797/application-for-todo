
const hourTens = document.querySelector('.hour-tens');
const hourOnes = document.querySelector('.hour-ones');
const minuteTens = document.querySelector('.minute-tens');
const minuteOnes = document.querySelector('.minute-ones');
const secondTens = document.querySelector('.second-tens');
const secondOnes = document.querySelector('.second-ones');
const amPmElement = document.querySelector('.am-pm');

function updateClock() {
  const now = new Date();
  let hours = now.getHours(); // Use the original hours value
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const isAm = hours < 12; // Correctly check for hours less than 12 for AM

  // Convert hours to 12-hour format
  if (hours > 12) {
    hours -= 12;
  }
  // Handle midnight (0) and noon (12)
  if (hours === 0) {
    hours = 12;
  }

  hourTens.textContent = Math.floor(hours / 10);
  hourOnes.textContent = hours % 10;
  minuteTens.textContent = Math.floor(minutes / 10);
  minuteOnes.textContent = minutes % 10;
  secondTens.textContent = Math.floor(seconds / 10);
  secondOnes.textContent = seconds % 10;
  amPmElement.textContent = isAm ? 'AM' : 'PM';

  requestAnimationFrame(updateClock);
}

updateClock();
