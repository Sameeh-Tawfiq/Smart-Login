var userName = document.querySelector('input[type="text"]');
var userEmail = document.querySelector('input[type="email"]');
var userPass = document.querySelector('input[type="password"]');
var signUp = document.querySelector(".signup");
var userAlert = document.querySelector(".alerts");

if (localStorage.getItem("usersContainer") == null) {
  var usersContainer = [];
} else {
  var usersContainer = JSON.parse(localStorage.getItem("usersContainer"));
}


signUp.addEventListener("click", function () {
  var user = {
    uName: userName.value,
    uEmail: userEmail.value,
    uPass: userPass.value,
  };
  if (search() == "exists") {
    userAlert.innerHTML = '<p class="text-warning">email already exists</p>';
  } else if (search() == "not existed") {
    usersContainer.push(user);
    console.log(usersContainer);
    localStorage.setItem("usersContainer", JSON.stringify(usersContainer));
    userAlert.innerHTML = '<p class="text-success">Success</p>';
  }
});

function search() {
  for (var i = 0; i < usersContainer.length; i++) {
    if (usersContainer[i].uEmail == userEmail.value) {
      return "exists";
    }
  }
  return "not existed";
}
