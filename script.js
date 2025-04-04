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

function initSideBarToggle(){
  const navToggel=document.querySelector('.nav-toggle');
  const sideBar=document.getElementById('sidebar');
if(!navToggel || !sideBar) {
  console.warn('navToggle или sideBar не найдены' );
  return;
}
navToggel.addEventListener('click',
  () => { sideBar.classList.toggle('sidebar--open');
  });
}
  document.addEventListener('DOMContentLoaded',
    () => { initSideBarToggle();});
