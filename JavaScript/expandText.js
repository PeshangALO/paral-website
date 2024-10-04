let projectTextBox = document.querySelectorAll(".project-textbox-wrap");

projectTextBox.forEach((project) => {
    project.addEventListener("click", () => {
                let projectText = project.querySelector(".project-step-text");
                let projectBox = project.querySelector(".project-textbox");
                    projectText.classList.toggle("expanded");
                    projectBox.classList.toggle("expanded");
                    project.classList.toggle("expanded");       
    });
    
});