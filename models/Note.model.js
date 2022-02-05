const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
  },

  text: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model("note", noteSchema);

module.exports = Note;
