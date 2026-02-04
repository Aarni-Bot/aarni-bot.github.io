document.addEventListener("DOMContentLoaded", onkoKirjautunut);


function onkoKirjautunut() {
    if (localStorage.getItem("kirjautunut") == "kyllä") {
        document.getElementById("kirjaudu_nappi").style.display = "none";
        document.getElementById("kirjaudu_ulos_nappi").style.display = "visible";
        document.getElementById("welcome-text").textContent += localStorage.getItem("nimi");
        document.getElementById("nimi").disabled = true;
        document.getElementById("nimi").placeholder = localStorage.getItem("nimi");

    } else if (localStorage.getItem("kirjautunut") == "ei") {
        document.getElementById("kirjaudu_ulos_nappi").style.display = "none";
        document.getElementById("nimi").style.display = "visible";
        document.getElementById("nimi").disabled = false
        document.getElementById("nimi").placeholder = "Syötä nimesi";

    }
}


function kirjaudu() {
    if (document.getElementById("nimi").value != "") {
        localStorage.setItem("nimi", document.getElementById("nimi").value);
        localStorage.setItem("kirjautunut", "kyllä")
    }
}

function kirjauduUlos() {
    localStorage.setItem("kirjautunut", "ei")
    localStorage.nimi = ""
}