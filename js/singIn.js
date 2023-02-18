var userEmail = document.querySelector('input[type="email"]');
var userPass = document.querySelector('input[type="password"]');
var userAlert = document.querySelector(".alerts");
var userLogin = document.querySelector(".login");

var usersContainer = JSON.parse(localStorage.getItem("usersContainer"));
console.log(usersContainer, userEmail, userPass);

function search() {
  for (var i = 0; i < usersContainer.length; i++) {
    if (
      usersContainer[i].uEmail == userEmail.value &&
      usersContainer[i].uPass == userPass.value
    ) {
      localStorage.setItem('current-user', `${usersContainer[i].uName}`)
      return "exists";
    }
  }
  return "not existed";
}

userLogin.addEventListener("click", function () {
  if (search() == "exists") {
    console.log("exist", localStorage.getItem('current-user'));
    userLogin.setAttribute("href", "./home.html");
  } else if (search() == "not existed") {
    console.log("not exist");
    userAlert.innerHTML =
      '<p class="text-warning">incorrect email or password</p>';
  }
});
