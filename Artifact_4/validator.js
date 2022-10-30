function isValid() {
  document.getElementById("errorMessages").innerHTML = "";
  var warning = document.getElementsByClassName("warning");
  console.log(warning);
  const errorCheck = [
    firstName(),
    lastName(),
    email(),
    phone(),
    username(),
    password(),
    address(),
    city(),
    state(),
    country(),
    zip(),
  ];
  if (errorCheck.reduce((a, b) => a + b) === errorCheck.length) {
    Array.from({ length: warning.length }).map(
      (e, i) => (warning[i].style.opacity = "0%")
    );
    return true;
  } else {
    Array.from({ length: warning.length }).map(
      (e, i) => (warning[i].style.opacity = "100%")
    );
    document.getElementById("submiterror").innerHTML =
      "<p><strong>Error Submitting — See Above</strong></p>";
    event.preventDefault();
  }
  return false;
}

FirstName.addEventListener("blur", firstName, false);
function firstName() {
  try {
    var firstname = document.getElementById("FirstName").value;
    if (firstname === "null" || firstname === "" || firstname.length > 20)
      throw "<p>The firstname is required and cannot be greater than 20 characters</p>";
    return true;
  } catch (err) {
    document.getElementById("errorMessages").innerHTML += err;
    return false;
  }
}

function lastName() {
  try {
    var lastname = document.getElementById("LastName").value;
    if (lastname === "null" || lastname === "" || lastname.length > 50)
      throw "<p>The lastname is required and cannot be greater than 50 characters</p>";
    return true;
  } catch (err) {
    document.getElementById("errorMessages").innerHTML += err;
    return false;
  }
}

function email() {
  try {
    var email = document.getElementById("Email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length)
      throw "<p>The email address is required and must be valid</p>";
    return true;
  } catch (err) {
    document.getElementById("errorMessages").innerHTML += err;
    return false;
  }
}

function phone() {
  try {
    var phone = document.getElementById("Phone").value;
    var numbers = /^[0-9]+$/;
    if (isNaN(phone) || phone.lenght > 15 || phone === null || phone === "")
      throw "<p>The phone number is required and must be valid</p>";
    if (
      phone === null ||
      phone === "" ||
      phone.length > 15 ||
      !phone.match(numbers)
    )
      throw "<p>The phone number is required and must be valid</p>";
    return true;
  } catch (err) {
    document.getElementById("errorMessages").innerHTML += err;
    return false;
  }
}

function username() {
  try {
    var username = document.getElementById("Username").value;
    if (username === "null" || username === "" || username.length > 12)
      throw "<p>The username is required and cannot be greater than 20 characters</p>";
    return true;
  } catch (err) {
    document.getElementById("errorMessages").innerHTML += err;
    return false;
  }
}

function password() {
  try {
    var password = document.getElementById("Password").value;
    if (password === "null" || password === "" || password.length > 14)
      throw "<p>The password is required and cannot be greater than 14 characters</p>";
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (
      !password.match(upperCaseLetters) ||
      !password.match(lowerCaseLetters) ||
      !password.match(numbers) ||
      !password.match(specialCharacters)
    )
      throw "<p>The password must contain at least one uppercase, one lowercase, one number, and one special character</p>";
    return true;
  } catch (err) {
    document.getElementById("errorMessages").innerHTML += err;
    return false;
  }
}

function address() {
  try {
    var address = document.getElementById("Address").value;
    if (address === "null" || address === "")
      throw "<p>The address cannot be empty</p>";
    return true;
  } catch (err) {
    document.getElementById("errorMessages").innerHTML += err;
    return false;
  }
}

function city() {
  try {
    var city = document.getElementById("City").value;
    if (city === "null" || city === "") throw "<p>The city cannot be empty</p>";
    return true;
  } catch (err) {
    document.getElementById("errorMessages").innerHTML += err;
    return false;
  }
}

function state() {
  try {
    var state = document.getElementById("State").value;
    console.log(state);
    if (state === "null" || state === "")
      throw "<p>The state cannot be empty</p>";
    return true;
  } catch (err) {
    document.getElementById("errorMessages").innerHTML += err;
    return false;
  }
}

function country() {
  try {
    var country = document.getElementById("Country").value;
    if (country === "null" || country === "")
      throw "<p>The country cannot be empty</p>";
    return true;
  } catch (err) {
    document.getElementById("errorMessages").innerHTML += err;
    return false;
  }
}

function zip() {
  try {
    var zip = document.getElementById("Zip").value;
    var numbers = /^[0-9]+$/;
    if (zip === null || zip === "" || zip.length > 5 || !zip.match(numbers))
      throw "<p>The zip code is required and must be valid</p>";
    return true;
  } catch (err) {
    document.getElementById("errorMessages").innerHTML += err;
    return false;
  }
}
