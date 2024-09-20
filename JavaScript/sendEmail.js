function sendEmail(){
    let parms = {
        name: document.getElementById("name").value,
        from_name: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    emailjs.send("service_41icu68", "template_w0dnhsv", parms).then(function(response){
        window.location.href="./email_success.html";
    }, function(error){
        alert("Failed to send messsage. Please try again later.")
    });
}