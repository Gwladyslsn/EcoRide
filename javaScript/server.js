const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware pour analyser les corps de requêtes en JSON
app.use(express.json());

// Connexion à MongoDB
mongoose
  .connect("mongodb://localhost:27017/nom_de_ta_base", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Erreur de connexion à MongoDB :", err));

// Démarrer le serveur
app.listen(3000, () => {
  console.log("Serveur démarré sur http://localhost:3000");
});

const Event = require("./models/Event");

// Route de recherche
app.get("/search", async (req, res) => {
  const query = req.query.q; // Récupérer le paramètre de recherche
  try {
    const results = await Event.find({
      name: { $regex: query, $options: "i" }, // Recherche insensible à la casse
    });
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: "Erreur de la recherche d'événements" });
  }
});

// Route pour ajouter un événement
app.post("/events", async (req, res) => {
  const { name, date, description } = req.body;
  try {
    const newEvent = new Event({ name, date, description });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de l'ajout de l'événement" });
  }
});
