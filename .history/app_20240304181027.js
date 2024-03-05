const navBtn = document.querySelector("#nav--btn").getTime();
const onmenu = document.querySelector("#onmenu");
//dem nguoc
let endDay = new Date('06/28/2024 00:00:00');
let  dothat = setInterval(Function(){

},1000)

navBtn.addEventListener("click", function on() {
  onmenu.classList.toggle("mask");
  console.log("active");
});
