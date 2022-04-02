//console.log("test");

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

submit_button.addEventListener("click", function submit() {
    validation();
});

// document.getElementById("validation").addEventListener('keypress', function validation() {
//     document.getElementById("email").value});


// Password Validation



function verifyPassword() {  
    var password = document.getElementById("pswd").value;  
    //check empty password field  
    if(password == "") {  
       document.getElementById("message").innerText = "**Fill the password please!";
       return false;  
    }  
     
   //minimum password length validation  
    if(password.length < 8) {  
       document.getElementById("message").innerText = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(password.length > 15) {  
       document.getElementById("message").innerText = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    } 
    console.log("test password");
  }  

  var submit_button = document.getElementById("submit_button");