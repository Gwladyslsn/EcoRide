const mongoose = require("mongoose");

// Définition du modèle de données
const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String },
});

// Création du modèle
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
