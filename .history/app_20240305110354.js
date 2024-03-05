const navBtn = document.querySelector("#nav--btn");
const onmenu = document.querySelector("#onmenu");
//dem nguoc
let endDay = new Date("09/10/2024 00:00:00").getTime();
let check = setInterval(function () {
  let now = new Date().getTime();
  let distance = endDay - now;
  let day = Math.floor(distance / (24 * 60 * 60 * 1000));
  let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((distance % (60 * 1000)) / 1000);
  document.getElementById("day").innerText = day;
  document.getElementById("time").innerText = hour;
  document.getElementById("minute").innerText = minute;
  document.getElementById("seconds").innerText = seconds;
  if (distance <= 0) {
    clearInterval(check);
    document.getElementById("day").innerText = "00";
    document.getElementById("time").innerText = "00";
    document.getElementById("minute").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
}, 1000);
//end-----------------------
navBtn.addEventListener("click", function on() {
  onmenu.classList.toggle("mask");
  console.log("active");
});
