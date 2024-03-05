const navBtn = document.querySelector("#nav--btn");
const onmenu = document.querySelector("#onmenu");
//dem nguoc
let endDay = new Date("06/28/2024 00:00:00").getTime();
let check = setInterval(function () {
  let now = new Date().getTime();
  let distance = endDay - now;
  let day = Math.floor(distance / (24 * 60 * 60 * 1000));
  let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((distance % (60 * 1000)) / 1000);
  if (distance <= 0) {
    clearInterval(check);
  }
}, 3000);
console.log(day);
console.log(hour);
console.log(minute);
console.log(seconds);
navBtn.addEventListener("click", function on() {
  onmenu.classList.toggle("mask");
  console.log("active");
});
