const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema

const UserSchema = new Schema({
  name: {
    type: "String",
  },
  email: {
    type: "String",
  },
  ssn: {
    type: "string",
  },
});

module.exports = mongoose.model("users", UserSchema);
