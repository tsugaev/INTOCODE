const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,

  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "group",
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  paid: {
    type: Number,
    required: true,
  },

  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "note",
    },
  ],
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;

module.exports = Student;

module.exports = Student;
