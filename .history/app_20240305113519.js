const navBtn = document.querySelector("#nav--btn");
const onmenu = document.querySelector("#onmenu");
const endding = document.querySelector("#flashsale-down");

//dem nguoc

let endDay = new Date("06/28/2025 00:00:00").getTime();
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
    endding.style.display = "none";
    console.log("het gio roi em yeu");
  } else if ((endDay.style.display = "none")) {
    endDay.style.display = "flex";
  }
}, 1000);
//end-----------------------
navBtn.addEventListener("click", function on() {
  onmenu.classList.toggle("mask");
  console.log("active");
});
