const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "voici les données demandées!" });
});

router.post("/", (req, res) => {
  res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "post supprimé id: " + req.params.id });
});

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "post liké id: " + req.params.id });
});
router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "post disliké id: " + req.params.id });
});

module.exports = router;
