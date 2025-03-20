const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.get("/", (req, res) => {
    res.send("Hello, Express with MongoDB!");
});

module.exports = app;
