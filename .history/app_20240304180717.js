const navBtn = document.querySelector("#nav--btn");
const onmenu = document.querySelector("#onmenu");
//dem nguoc
let endDay = new Date();

navBtn.addEventListener("click", function on() {
  onmenu.classList.toggle("mask");
  console.log("active");
});
