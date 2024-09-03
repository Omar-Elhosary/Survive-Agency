var firebaseConfig = {
  apiKey: "AIzaSyDAjmCHBvta6k1mD7xhLEryowlf-sKz_3U",
  authDomain: "survive-agency.firebaseapp.com",
  projectId: "survive-agency",
  storageBucket: "survive-agency.appspot.com",
  messagingSenderId: "760179885969",
  appId: "1:760179885969:web:c51ed3aab2eb209bfd3c30",
  measurementId: "G-NNW202E0P3",
  databaseURL:
    "https://survive-agency-default-rtdb.europe-west1.firebasedatabase.app/",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
const loginBtn = document.getElementById("sign-in-btn");
const registerBtn = document.getElementById("sign-up-btn");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  register();
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  login();
});

function register() {
  let full_name = document.getElementById("sign-up-username").value;
  let email = document.getElementById("sign-up-email").value;
  let password = document.getElementById("sign-up-password").value;
  let teamCode = document.getElementById("team-code").value;
  let userType = checkCode(teamCode);

  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is Invalid");
    return;
  }
  if (validate_field(full_name) == false) {
    alert("One or More Extra Fields is Invalid!!");
    return;
  }

  // Move on with Auth
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        email: email,
        full_name: full_name,
        type: userType,
        last_login: Date.now(),
      };
      
      if (checkCode(teamCode) == "member") {
        user_data.team = "ISM";
      }

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).set(user_data);

      alert("User Created!!");
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Set up our login function
function login() {
  // Get all our input fields
  email = document.getElementById("sign-in-email").value;
  password = document.getElementById("sign-in-password").value;

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert("Email or Password is Invalid!!");
    return;
    // Don't continue running the code
  }

  auth
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser;

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child("users/" + user.uid).update(user_data);

      // DOne
      alert("User Logged In!!");
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}

// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}

function checkCode(code) {
  if (code == "ISM24@survive.agency") {
    return "member";
  }
  else {
    return "user";
  }
}