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

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.innerHTML = ` <h3> &copy; ${currentYear} Paral Development Company. All Rights Reserved. </h3>`;
});




const dropdown = document.getElementById("subject");
const moveContent = document.getElementById("move-content");
const label = document.querySelector("label[for='subject']");

let expanded = false; 

function expandDropDown(){
    const dropDownHeight = dropdown.offsetHeight; 
    
    if(!expanded){
    expanded = true;
    moveContent.style.marginTop = `${dropDownHeight + 130}px`;
    } else {
    expanded = false;
    moveContent.style.marginTop = "0px";
    }
}


label.addEventListener("click", (event) => {
    event.preventDefault();
    dropdown.focus(); 
});

dropdown.addEventListener("click", ()=> {
        expandDropDown();
});

dropdown.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " "){ 
        expandDropDown();
    } 
});

document.addEventListener("click", (event) => {
    if(!dropdown.contains(event.target) && expanded){
        expandDropDown();
    }

});

document.addEventListener("wheel", (event) =>{
    if(expanded){
        expandDropDown();
    }
})

window.addEventListener('blur', () => {
    if(expanded){
        expandDropDown();
    }
});

