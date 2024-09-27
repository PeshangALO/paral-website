document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".navbutton");
    let activeButton = null;
    const currentPage = window.location.pathname;
    let foundPage = false;

    navButtons.forEach((button, index) => {
        const link = button.closest("a").getAttribute("href");

        if (currentPage.includes(link)) {
            foundPage = true;
            button.classList.add("active");
            activeButton = button;    
        }

        button.addEventListener("click", () => {
            if (activeButton) {
                activeButton.classList.remove("active");
            }
            button.classList.add("active");
            activeButton = button;
            localStorage.setItem("activeButtonIndex", index);
        });
    });

    if(!foundPage){
        navButtons[0].classList.add("active");
    }
});






