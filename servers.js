var firebaseConfig = {
      apiKey: "AIzaSyC0ZofEIYKJwuJyqZ4u35FuMs4qAL5IU4k",
      authDomain: "project-93-27a0a.firebaseapp.com",
      databaseURL: "https://project-93-27a0a-default-rtdb.firebaseio.com",
      projectId: "project-93-27a0a",
      storageBucket: "project-93-27a0a.appspot.com",
      messagingSenderId: "660204119335",
      appId: "1:660204119335:web:9655676f7ab7c37be77502"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
            });
      });
}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
}
function logout(){
      window.location = "index.html";
   }
