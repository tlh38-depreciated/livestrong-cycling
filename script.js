function validate(){
    var valid = true;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // clears the errors on button press
    document.getElementById("fNameError").innerHTML = "";
    document.getElementById("lNameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("tourError").innerHTML = "";
    document.getElementById("tours").style.border = "";
    document.getElementById("bikeError").innerHTML = "";
    document.getElementById("bikeOptions").style.border = "";

    fname = document.getElementById("fName").value;
    lname = document.getElementById("lName").value;
    email = document.getElementById("email").value;
    usCbox = document.forms["registerForm"]["usTour[]"];
    euCbox = document.forms["registerForm"]["europeTour[]"];
    bike = document.forms["registerForm"]["bicycle"];

    if (fname == ""){
      document.getElementById("fNameError").innerHTML = "Please enter your first name";
      valid = false;
    }
    if (lname == ""){
      document.getElementById("lNameError").innerHTML = "Please enter your last name";
      valid = false;
    }
    if (!(email.match(validRegex))) {
        document.getElementById("emailError").innerHTML = "Please enter your email address";
        valid = false;
    }
    // error check for the tour selection section of the registry form
    if((
    usCbox[0].checked == false &&
    usCbox[1].checked == false &&
    usCbox[2].checked == false &&
    usCbox[3].checked == false &&
    usCbox[4].checked == false &&
    usCbox[5].checked == false
    )&&(
    euCbox[0].checked == false &&
    euCbox[1].checked == false &&
    euCbox[2].checked == false &&
    euCbox[3].checked == false &&
    euCbox[4].checked == false
    )){
    document.getElementById("tourError").innerHTML = "Please select at least ONE tour";
    document.getElementById("tours").style.border = "2px solid salmon";
    valid = false;
    }

    if(bike[0].checked == false && bike[1].checked == false){
        document.getElementById("bikeError").innerHTML = "Please select at least ONE option";
        document.getElementById("bikeOptions").style.border = "2px solid salmon";
        valid = false;
    }

    if(valid == true){
        document.getElementById("registerForm").submit();
    }

}


  /*function getCustomerInfo() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var bike;
    if (document.getElementById("ownBike").checked) {
      bike = "ownBike";
    } else if (document.getElementById("rentBike").checked) {
      bike = "rentBike";
    }
    var customerInfo = [firstName, lastName, email, bike];

    var tours = document.getElementById("tours");
    var checks = tours.getElementsByTagName("input");
    for (var i = 0; i < checks.length; i++) {
      if (checks[i].checked) {
        customerInfo.push(checks[i].value);
      }
    }
    // logs the array
    console.log(customerInfo);

    var customerInfoString = customerInfo.join(", ");

    // logs the newly converted string
    console.log(customerInfoString);
 

  }
*/