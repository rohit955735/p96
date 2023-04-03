
var firebaseConfig = {
      apiKey: "AIzaSyBhj1J0zTO05rTuxkp8i7wo2XAkvtEAiwQ",
      authDomain: "kwitterwebapp-c2fd7.firebaseapp.com",
      projectId: "kwitterwebapp-c2fd7",
      storageBucket: "kwitterwebapp-c2fd7.appspot.com",
      messagingSenderId: "604028741299",
      appId: "1:604028741299:web:f8907bb3ae2d8aa18332c6", 
      measurementId: "G-61XGK8BL0Y"
    };

    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("user_name");
    document.getElementById("username").innerHTML="WELCOME"+username+"!";
    function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ 
            purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code 
      console.log("room-name"+Room_names);
      row = "<div class='room_name' id=">+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

            //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
