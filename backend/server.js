const express = require("express");
// const connectDB = require("./db/dbConnexion");
const dotenv = require("dotenv").config();
const port = 5000;

//connexion à la base de donnée
// connectDB();
require("./db/dbConnexion");

const app = express();

// les middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.route"));

app.listen(port, () => {
  console.log("Le serveur a démarré au port " + port);
});
