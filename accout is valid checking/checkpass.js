function getUserInput() {
  let userName = document.getElementById("userNameInput").value;
  let password = document.getElementById("passwordInput").value;
  if (!userName || !password) {
    alert(
      "vui long nhap tai khoan va mat khau truoc khi dang nhap xin cam on "
    );
  } else if (userName == "admin" && password == "123") {
    alert("dang nhpa thanh cong ");
    window.location.href = "./index2.html";
  } else {
    alert("tai khoan hoac mat khau khong dung vui long thu  lai ");
  }
}
