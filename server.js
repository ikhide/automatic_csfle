const express = require("express");
const { secureClient } = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const UserSchema = require("./models/bJsonUser");
const UserSchema2 = require("./models/bJsonUser2");
const { encrypt, generateKeys } = require("./config/crypto");
const db1 = require("./config/keys").mongoURI1;
let connection;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handle cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,GET,DELETE");
    return res.status(200).json({});
  }
  next();
});

//connect to mongodb
mongoose
  .connect(db1, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

//secure connection
secureClient([UserSchema, UserSchema2])
  .connect()
  .then((connect) => {
    connection = connect;
    console.log("Secure database connection Create");
  });

//use routes
app.post("/registerUserManual", async (req, res) => {
  try {
    const startTime = new Date();
    const ssn = encrypt(req.body.ssn.toString());
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      ssn,
    });

    const endTime = new Date();
    await user.save();
    res.json({ user, time: endTime - startTime });
  } catch (err) {
    console.log(err);
  }
});

app.post("/registerUserCsfle", async (req, res) => {
  try {
    const startTime = new Date();
    const keyDB = connection.db("db1");
    const collection = keyDB.collection("users");
    // const ssnExists = await collection.findOne({ ssn: req.body.ssn });
    // if (ssnExists && ssnExists.ssn) {
    //   return res.status(400).json({
    //     error: "SSN has been used",
    //   });
    // }

    const writeResult = await collection.insertOne({
      name: req.body.name,
      ssn: req.body.ssn,
      amount: req.body.email,
    });

    const endTime = new Date();
    return res.json({ writeResult, time: endTime - startTime });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }
});

app.get("/fetchUsersNormal", async (req, res) => {
  try {
    const startTime = new Date();
    const users = await User.find({});
    const endTime = new Date();
    res.json({ users, time: endTime - startTime });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }
});
app.get("/fetchUsersUnEncrypt", async (req, res) => {
  const startTime = new Date();

  try {
    const keyDB = connection.db("db1");
    const collection = keyDB.collection("users");
    const users = await collection.find({}).toArray();
    const endTime = new Date();
    res.json({ users, time: endTime - startTime });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }
});

app.get("/genKey", (req, res) => {
  const keys = generateKeys();
  console.log(keys);
});

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on Port ${port}`));
