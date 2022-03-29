console.log("test");

function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log("test 2");

    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is valid."
        text.style = "'00ff00"
    }
    else
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Please enter a valid Email Address."
        text.style = "'ff0000"
        alert("Not a Valid Email Address");
    }
        
}

var submit_button = document.getElementById("submit_button");

submit_button.addEventListener("click", function submit() {
    validation();
});