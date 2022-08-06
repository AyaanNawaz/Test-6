


function loading(){
document.getElementById("user_name").innerHTML="";
}
function loginUser(){
    user_name=document.getElementById("user_name").value ;
    password=document.getElementById("password").value ;
    if(user_name==localStorage.getItem("user_name")&&password==localStorage.getItem("password")){
    window.location="kwitter_room.html";
    }
    
    }