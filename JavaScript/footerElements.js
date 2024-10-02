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
const socialMediaMove = document.getElementById("move-social-media");
const label = document.querySelector("label[for='subject']");

let expanded = false;

// Expand or collapse the dropdown
function toggleDropDown(state) {
    const dropDownHeight = dropdown.offsetHeight;
    if (state !== undefined) {
        expanded = state;
    } else {
        expanded = !expanded;
    }

    if (expanded) {
        moveContent.style.transform = `translateY(${dropDownHeight + 100}px)`; // Expand
        socialMediaMove.style.paddingTop = `${dropDownHeight + 90}px`
    } else {
        moveContent.style.transform = "translateY(0px)"; // Collapse
        socialMediaMove.style.paddingTop = "0px";
    }
}

// Unified event listener
function unifiedEventListener(event) {
    const target = event.target;

    if (target === label) {
        event.preventDefault();
        dropdown.focus();
    }

    if (target === dropdown || event.type === "keydown") {
        if (event.type === "click" || event.key === "Enter" || event.key === " ") {
            toggleDropDown();
        }
    }

    if (event.type === "wheel") {
        if (expanded) {
            toggleDropDown(false);
        }
    }
}

    dropdown.addEventListener("focusout", () => {
        if (expanded) {
            toggleDropDown(false);
        }
    });


document.addEventListener("click", unifiedEventListener);
document.addEventListener("keydown", unifiedEventListener);
document.addEventListener("wheel", unifiedEventListener);
window.addEventListener("blur", unifiedEventListener);


