function addUser(){
   UserName = document.getElementById("user_name").value;
   localStorage.setItem("user name", UserName);
   window.location = "servers.html";
}