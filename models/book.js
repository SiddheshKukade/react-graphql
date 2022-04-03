const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: String,
  genre: String,
  aid: String
});
module.exports = mongoose.model("Book", BookSchema);
