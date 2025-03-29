function checkPassword() {
  const input = document.getElementById("password").value;
  const correctPassword = "grisha123";

  if (input === correctPassword) {
    // В будущем здесь будет запрос к Spring Boot
    window.location.href = "nextstep.html"; // или вызов API
  } else {
    document.getElementById("error").textContent = "Неверный пароль!";
  }
}
