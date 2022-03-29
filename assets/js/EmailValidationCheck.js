//console.log("test");

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
    }
        
}

var submit_button = document.getElementById("submit_button");
//console.log(submit_button);

submit_button.addEventListener("click", function submit() {
    validation();
});
