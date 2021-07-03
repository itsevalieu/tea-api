// Dependencies
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// Connect to Database
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost:27017/tea_db";
console.log(mongoURL);
mongoose.Promise = global.Promise;
mongoose.connect(mongoURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Set Up Server
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Router
app.use("/api", require("./app/routes/tea.js"));
app.use("/api/tag", require("./app/routes/tag.js"));
app.use("/api/comment", require("./app/routes/comment.js"));

//Listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
