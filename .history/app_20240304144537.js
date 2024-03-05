const navBtn = document.querySelector("#nav--btn");
const onmenu = document.querySelector("#onmenu");
navBtn.addEventListener("click", function on() {
  onmenu.classList.toggle("mask");
  console.log("active");
});
