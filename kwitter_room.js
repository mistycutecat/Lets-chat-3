//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

      apiKey: "AIzaSyAu78pp6KvXkGL3ZKqxTNpwjqmJwYG-9Do",
      authDomain: "kwitter-713bf.firebaseapp.com",
      databaseURL: "https://kwitter-713bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-713bf",
      storageBucket: "kwitter-713bf.appspot.com",
      messagingSenderId: "1088899468819",
      appId: "1:1088899468819:web:bc8067f27a7d861dfaf9e6"
    };
    
    
    // Initialize Firebase
    
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
      {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(user_name).update({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}