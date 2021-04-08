const doc = document
  , days = doc.getElementById('days')
  , hours = doc.getElementById('hours')
  , minutes = doc.getElementById('minutes')
  , seconds = doc.getElementById('seconds')
  , countdown = doc.getElementById('countdown')
  , newYear = doc.getElementById('newYear')
  , loading = doc.getElementById('loading')
  , currentYear = new Date().getFullYear()
  , newYearTime = new Date(`${currentYear + 1}`)
  , title = doc.querySelector('title')
  , h1 = doc.querySelector('h1 span');

title.innerText = `До ${newYearTime.getFullYear()}г. ${updateCountdown()}`;
newYear.innerHTML = h1.innerHTML = newYearTime.getFullYear();

function updateCountdown() {
  const currentTime = new Date()
    , diff = newYearTime - currentTime
    , day = Math.floor(diff / 1000 / 60 / 60 / 24)
    , hour = Math.floor(diff / 1000 / 60 / 60) % 24
    , minute = Math.floor(diff / 1000 / 60) % 60
    , second = Math.floor(diff / 1000) % 60;

  days.innerHTML = day;
  hours.innerHTML = hour < 10 ? `0${hour}` : hour;
  minutes.innerHTML = minute < 10 ? `0${minute}` : minute;
  seconds.innerHTML = second < 10 ? `0${second}` : second;

  return `осталось: ${day}д.${hour}ч.${minute}м.`;
}

updateCountdown();

setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}
  , 1000);

setInterval(updateCountdown, 1000);
