logout();
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email;
      window.location = "loggedinPage.html";
    }

  } else {
    // No user is signed in.

  }
});

function login(){
  var userEmail = document.getElementById("emailInput").value;
  var userPass = document.getElementById("passwordInput").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
function signup(){

	var userEmail = document.getElementById("emailInput").value;
  	var userPass = document.getElementById("passwordInput").value;
	
	firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	// ...
  	window.alert("Error : " + errorMessage);
	});
}
function logout(){
  firebase.auth().signOut();
}