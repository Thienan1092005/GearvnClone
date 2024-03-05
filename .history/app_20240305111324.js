const navBtn = document.querySelector("#nav--btn");
const onmenu = document.querySelector("#onmenu");
//dem nguoc
let endDay = new Date("09/10/2022 00:00:00").getTime();
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
    setTimeout(function(){
      const ending = document.querySelector("#flashsale-dow")
    },10000)
//end-----------------------
navBtn.addEventListener("click", function on() {
  onmenu.classList.toggle("mask");
  console.log("active");
});
