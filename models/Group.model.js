const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  name: String,

  week: Number,

  finished: {
    type: Boolean,
    required: true,
  },

  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
    },
  ],
});

const Group = mongoose.model("group", groupSchema);

module.exports = Group;
