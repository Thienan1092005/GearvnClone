function getUserInput() {
  let userName = document.getElementById("userNameInput").value;
  let password = document.getElementById("passwordInput").value;
  let loginDone = false;
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
