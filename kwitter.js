


function loading(){
document.getElementById("user_name").innerHTML="";
}
function addUser(){
user_name=document.getElementById("user_name").value ;
password=document.getElementById("password").value ;
localStorage.setItem("user_name", user_name);
localStorage.setItem("password", password);
if(user_name&&password!=""){
window.location="login.html";
}
}