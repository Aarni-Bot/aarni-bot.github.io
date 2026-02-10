document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    if (localStorage.getItem("kirjautunut") == "kyllä") {
        document.getElementById("kirjaudu_nappi").style.display = "none";
        document.getElementById("kirjaudu_ulos_nappi").style.display = "inline-block";
        document.getElementById("welcome-text").textContent = "Tervetuloa " + localStorage.getItem("nimi");
        document.getElementById("nimi").disabled = true;
        document.getElementById("nimi").value = localStorage.getItem("nimi");
    } else {
        document.getElementById("kirjaudu_ulos_nappi").style.display = "none";
        document.getElementById("kirjaudu_nappi").style.display = "inline-block";
        document.getElementById("nimi").disabled = false;
        document.getElementById("nimi").value = "";
        document.getElementById("nimi").placeholder = "Syötä nimesi";
        document.getElementById("welcome-text").textContent = "Tervetuloa";
    }
}

function kirjaudu() {
    event.preventDefault();
    if (document.getElementById("nimi").value != "") {
        localStorage.setItem("nimi", document.getElementById("nimi").value);
        localStorage.setItem("kirjautunut", "kyllä");
        onkoKirjautunut();
    }
}

function kirjauduUlos() {
    event.preventDefault();
    localStorage.setItem("kirjautunut", "ei");
    localStorage.setItem("nimi", "");
    onkoKirjautunut();
}