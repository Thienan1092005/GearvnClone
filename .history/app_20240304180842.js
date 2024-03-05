const navBtn = document.querySelector("#nav--btn");
const onmenu = document.querySelector("#onmenu");
//dem nguoc
let endDay = new Date('06/28/2024 00:00:00');
let 

navBtn.addEventListener("click", function on() {
  onmenu.classList.toggle("mask");
  console.log("active");
});
