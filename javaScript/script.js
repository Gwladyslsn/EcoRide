// Lorsque l'utilisateur clique sur l'icône, ouvre le calendrier
const dateInput = document.getElementById("date");
const calendarButton = document.getElementById("calendar-button");
calendarButton.addEventListener("click", () => {
  dateInput.showPicker(); // Fonction intégrée pour afficher le calendrier
});

// Lorsque l'utilisateur sélectionne une date dans le calendrier
dateInput.addEventListener("change", () => {
  const selectedDate = new Date(dateInput.value); // Crée une Date avec la date sélectionnée
  const formattedDate = selectedDate.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }); // Formate la date en français
  document.querySelector(".js-selected-date").textContent = formattedDate; // Affiche la date dans le span
});
