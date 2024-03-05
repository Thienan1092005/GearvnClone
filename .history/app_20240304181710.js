const navBtn = document.querySelector("#nav--btn").getTime();
const onmenu = document.querySelector("#onmenu");
//dem nguoc
let endDay = new Date("06/28/2024 00:00:00").getTime();
let check = setInterval(function () {
  let now = new Date().getTime();
  let distance = endDay - now;
  let day = (Math.floor = distance / (24 * 60 * 60 * 1000));
}, 3000);

navBtn.addEventListener("click", function on() {
  onmenu.classList.toggle("mask");
  console.log("active");
});
