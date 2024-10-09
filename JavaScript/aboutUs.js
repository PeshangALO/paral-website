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

let aboutUsText = document.getElementById("about-us-text");
let aboutUsClick = document.getElementById("about-us-click");
let wishToRead = false;


const toggleReadMore = function (){
    if(!wishToRead){
        wishToRead = true; 
        aboutUsClick.innerHTML = "";
        aboutUsText.innerHTML = `å holde oss i forkant i det stadig skiftende AI-landskapet. 
            Kompetanseutvikling står sentralt hos oss, og vi investerer kontinuerlig i både individuell og kollektiv læring for å sikre at vi alltid leverer de mest innovative løsningene til våre kunder. </p>
            
        <p>Vi tror på å skape varige verdier gjennom tett samarbeid og grundig forståelse av våre kunders behov. 
            Uansett oppdragets omfang eller kompleksitet, kan du være trygg på at vi hos Paral Dynamic alltid vil gå den ekstra milen. 
            Vi jobber målrettet for å overgå forventningene og levere resultater som gjør en forskjell. Hos oss får du ikke bare teknisk ekspertise, men også et dedikert team som virkelig bryr seg om din suksess.</p>
        `; } else {
            wishToRead = false;
            aboutUsText.innerHTML = "";
        }
}

aboutUsClick.addEventListener("click", toggleReadMore);

aboutUsClick.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        toggleReadMore();
    }
})