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
<<<<<<< HEAD

=======
function redirectToPage(event){
  event.preventDefault();
  var selectedUrl = document.getElementById("position").value;
  if(selectedUrl) {
    window.location.href = selectedUrl;
  }else{
    alert("Пожалуйста, выберите должность.");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var form=document.getElementById("positionForm");
  form.addEventListener('submit',redirectToPage);
})
>>>>>>> 4126f8e44e52d818eb31e634ac73fe2c12fed5cb
