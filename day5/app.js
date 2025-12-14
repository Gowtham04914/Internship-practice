const express = require("express");
const app = express();

// middleware
app.use(express.json());

// GET route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// GET with parameter
app.get("/user/:id", (req, res) => {
  res.send("User ID = " + req.params.id);
});

// POST route
app.post("/login", (req, res) => {
  res.send("Login data = " + JSON.stringify(req.body));
});

// server start
app.listen(3000, () => {
  console.log("Server running on 3000");
});
