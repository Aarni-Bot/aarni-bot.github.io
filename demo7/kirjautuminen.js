document.addEventListener("DOMContentLoaded", onkoKirjautunut);


function onkoKirjautunut() {
    let kirjautunut = 'kyllä';
    if (kirjautunut == 'kyllä') {
        if (localStorage.getItem("nimi") != null) { //tarkistaa ettei nimi ole tyhjä
            document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
        }
    }
}


function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
}