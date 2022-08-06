//YOUR FIREBASE LINKS
firebaseConfig = {
      apiKey: "AIzaSyCWuibRz4NrSADiSQ4JH4fsX7pbdnk2lZI",
      authDomain: "kwitter-a562e.firebaseapp.com",
      databaseURL: "https://kwitter-a562e-default-rtdb.firebaseio.com",
      projectId: "kwitter-a562e",
      storageBucket: "kwitter-a562e.appspot.com",
      messagingSenderId: "714617867823",
      appId: "1:714617867823:web:be4891536d5aaae1b940da",
      measurementId: "G-29Y3G61VWD"
    };
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
msg=document.getElementById("msg").value ;
if(msg!=""){
firebase.database().ref(room_name).push({
name : user_name,
message : msg,
like : 0
});
console.log(msg);
document.getElementById("msg").value ="";
}
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4 style='font-family:Arial'>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4' style='font-family:Times New Roman'>" + message + "</h4>";
like_button="<button style='word-spacing: -8px; font-family:serif;' class='btn btn-warning' id="+ firebase_message_id + " value=" +like +" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Likes For This Message: "+ like +"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;


//End code
      } });  }); }
getData();

function updateLike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value ;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
like:updated_likes
});
}

function logOut(){
      window.location="index.html"
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      }
      function back(){
      window.location="kwitter_room.html"
      }
      