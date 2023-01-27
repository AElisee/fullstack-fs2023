const express = require("express");
const dotenv = require("dotenv").config();
const port = 5000;
const cors = require("cors");

//connexion à la base de donnée
require("./db/dbConnexion");

const app = express();

// Autorisation CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// les middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.route"));

app.listen(port, () => {
  console.log("Le serveur a démarré au port " + port);
});
