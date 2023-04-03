//YOUR FIREBASE LINKS

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
  user_name = localstorage.getData("user_name");
  room_name = localstorage.getData("room_name");
  function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
   message:msg,
   like:0
  });
  document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
