const navBtn = document.querySelector("#nav--btn");
const onmenu = document.querySelector("#onmenu");
navBtn.addEventListener("click", function on() {
  // if (!onmenu.classList.contains("mask")) {
  //   onmenu.classList.add("mask");
  // } else {
  //   onmenu.classList.remove("mask");
  // }
  onmenu.classList.toggle("mask");
  console.log("active");
});
