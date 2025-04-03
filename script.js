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