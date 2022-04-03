// Email Validation







var email_div = document.getElementById("email_div");
var email_validation_msg = document.createElement("h5");
email_div.appendChild(email_validation_msg);

function validation() {
    var email = document.getElementById("email").value;

    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var valid_message = "Your Email Address is valid.";
    var invalid_message = "Please enter a valid Email Address.";

    if (email.match(pattern))
    {
        email_validation_msg.innerText = valid_message;
        email_validation_msg.style.color = "#00FFF7";
    }
    else
    {
        email_validation_msg.innerText = invalid_message;
        email_validation_msg.style.color = "#ff00e1";
        //alert("Not a Valid Email Address");
    };
 
    console.log("")
    verifyPassword();
}

var submit_button = document.getElementById("submit_button");
//console.log(submit_button);










// Password Validation

var password_div = document.getElementById("password_div");
var password_verify_msg = document.createElement("h5");
password_div.appendChild(password_verify_msg);

function verifyPassword() {  
    var password = document.getElementById("pswd").value;
    
    //check empty password field  
    if(password == "") {  
        password_verify_msg.innerText = "**Fill the password please!";
        password_verify_msg.style.color = "#00FFF7";
        return false;
    }  
     
   //minimum password length validation  
    if(password.length < 8) {  
        password_verify_msg.innerText = "**Password length must be atleast 8 characters"; 
        password_verify_msg.style.color = "#00FFF7";
        return false;  
    }  
    
  //maximum length of password validation  
    if(password.length > 15) {  
        password_verify_msg.innerText = "**Password length must not exceed 15 characters";
        password_verify_msg.style.color = "#00FFF7";
        return false;  
    } else {  
       password_verify_msg.innerText = "Password validation is passed";  
       password_verify_msg.style.color = "00FFF7"
    }
  };



  var submit_button = document.getElementById("submit_button");