function checkPassword() {
  document.getElementById("loginBtn").addEventListener("click", async () => {
    const password = document.getElementById("passwordInput").value;
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password })
      });
      if (response.ok) {
        window.location.href = "nextstep.html";
      } else {
        alert("Вы ввели неверный пароль");
      }
    } catch (error) {
      console.error("Произошла ошибка запроса:", error);
    }
  });
}

