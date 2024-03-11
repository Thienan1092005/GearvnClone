function getUserInput() {
  let userName = document.getElementById("userNameInput").value;
  let password = document.getElementById("passwordInput").value;
  let loginDone = false;
  const play = document.querySelector("#play");
  const song = document.querySelector("#song");
  const plate = document.querySelector("#plate");
  let isPlay = false;
  if (!userName || !password) {
    alert(
      "vui long nhap tai khoan va mat khau truoc khi dang nhap xin cam on "
    );
  } else if (userName == "admin" && password == "123") {
    alert("dang nhap thanh cong ");
    window.location.href = "./index2.html";
    loginDone = true;
  } else {
    alert("tai khoan hoac mat khau khong dung vui long thu  lai ");
  }
}

play.addEventListener("click", () => {
  if (isPlay == false) {
    song.play();
    plate.style.animation = "rotateTurntable 5s linear infinite";
    play.setAttribute("name", "pause-circle-outline");
    console.log("play a song ");
    isPlay = true;
  } else {
    song.pause();
    plate.style.animation = "none";
    play.setAttribute("name", "play-circle-outline");
    console.log("!play a song ");
    isPlay = false;
  }
});
song.addEventListener("ended", () => {
  plate.style.animation = "none";
  play.setAttribute("name", "play-circle-outline");
  isPlay = false;
});
