const mongoose = require("mongoose");

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: Number,
});

module.exports = new mongoose.model("tbl_phonebook", phonebookSchema);
