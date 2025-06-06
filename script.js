async function checkDisponibilite() {
  try {
    const response = await fetch("https://www.rdv-prefecture.interieur.gouv.fr/rdvpref/reservation/demarche/6880/creneau/", {
      method: "GET",
      credentials: "include"
    });
    const text = await response.text();

    if (text.includes("Aucun créneau disponible")) {
      console.log("Aucun créneau pour le moment.");
    } else {
      document.getElementById("alert-zone").innerText = "✅ Un créneau est potentiellement disponible ! Va vite vérifier !";
      alert("Un rendez-vous est peut-être dispo !");
    }
  } catch (error) {
    console.error("Erreur :", error);
  }
}

// Vérifie toutes les 30 secondes
setInterval(checkDisponibilite, 30000);

// Lancer une première vérif tout de suite
checkDisponibilite();

Ajout de script.js
