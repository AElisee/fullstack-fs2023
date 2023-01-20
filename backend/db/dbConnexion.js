const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas !"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
