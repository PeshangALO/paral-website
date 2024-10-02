let readMore = document.getElementById("read-more-click");
let readMoreText = document.getElementById("read-more-text");

readMore.addEventListener("click", () => {
let wishToRead = false;

    if(!wishToRead){
        wishToRead = true;
        readMore.innerHTML = "";
        readMoreText.innerHTML = ` Vi samarbeider tett med våre kunder for å skape
         skreddersydde løsninger som møter deres unike behov og hjelper dem med å nå sine mål.
          Med sterk tilknytting til AI. I Kompetansemiljøet i Grimstad er vi perfekt plassert for å levere verdi. 
          Vårt ekspertteam er klare til å utvikle de perfekte produktene som driver din virksomhet fremover.`;
    } else {
        wishToRead = false;
        readMoreText.innerHTML = "";
    }

});
