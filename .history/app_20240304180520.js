const navBtn = document.querySelector("#nav--btn");
const onmenu = document.querySelector("#onmenu");
const time = new Date();

navBtn.addEventListener("click", function on() {
  onmenu.classList.toggle("mask");
  console.log("active");
});
console.log(time.gettime());
