const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema

const UserSchema = new Schema({
  name: {
    type: "String",
  },
  email: {
    type: "String",
    required: true,
  },
  ssn: {
    type: "string",
    index: true,
  },
});

module.exports = mongoose.model("users", UserSchema);
