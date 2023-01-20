const express = require("express");
const port = 5000;

const app = express();

// les middlwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.route"));

app.listen(port, () => {
  console.log("Le serveur a démarré au port " + port);
});
