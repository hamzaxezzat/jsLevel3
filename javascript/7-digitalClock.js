const clock = document.querySelector("#clock");

const digitalClock = () => {
  const now = new Date();

  let date = now.toDateString();
  let hours = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let am = "am";

  if (hours > 12) {
    hours = hours - 12;
    am = "pm";
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (hours == 0) {
    hours = 12;
  }
  if (min < 10) {
    min = `0${min}`;
  }

  if (sec < 10) {
    sec = `0${sec}`;
  }

  let addClock = `
  <div class="date">
    ${date}
  </div>
  <div class="time">
    ${hours} : ${min} : ${sec} ${am}
  </div>
`;
  clock.innerHTML = addClock;
  console.log(addClock);
};

setInterval(digitalClock, 1000);
