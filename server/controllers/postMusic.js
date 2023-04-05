const { connect } = require("../utils/dbConfig");

module.exports.postContact = async (req, res) => {
  const file = req.file;
  const body = req.body;
  const addedMusic = {
    title: body.title,
    artist: body.artist,
    audio: file?.filename,
    email: body.email,
  };
  const db = await connect();
  const result = await db.collection("music").insertOne(addedMusic);
  if (result) {
    return res.send({ success: true, result });
  }
};
