const express = require("express");
const { postContact } = require("../controllers/postMusic.js");
const { getMusic } = require("../controllers/getMusic.js");
const { deleteMusic } = require("../controllers/deleteMusic.js");
const router = express.Router();
const multer = require("multer");
const { getMusicByEmail } = require("../controllers/getMusicByEmail.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });

router.get("/", getMusic);
router.get("/:email", getMusicByEmail);
router.delete("/:id", deleteMusic);

router.post("/", upload.single("file"), postContact);

module.exports = router;
