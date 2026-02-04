document.addEventListener("DOMContentLoaded", onkoKirjautunut);


function onkoKirjautunut() {
    if (localStorage.getItem("kirjautunut") == "kyllä") {
        document.getElementById("tervetulo_teksti").textContent += localStorage.getItem("nimi");
        document.getElementById("kirjaudu_nappi").style.display = "none";
        document.getElementById("kirjaudu_ulos_nappi").style.display = "visible";
        document.getElementById("nimi").style.display = "none";
    } else if (localStorage.getItem("kirjautunut") == "ei") {
        document.getElementById("kirjaudu_ulos_nappi").style.display = "none";
        document.getElementById("nimi").style.display = "visible";
    }
}


function kirjaudu() {
    if (document.getElementById("nimi").value != "") {
        localStorage.setItem("nimi", document.getElementById("nimi").value);
        localStorage.setItem("kirjautunut", "kyllä")
    }
}

function kirjauduUlos() {
    localStorage.clear()
    localStorage.setItem("kirjautunut", "ei")
}