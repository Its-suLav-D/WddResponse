// Create a node Express Project Template

// Import the express module
const express = require("express");
const cors = require("cors");

// Create an express application
const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Content-Type", "application/json");
  next();
});

// Create a route for the home page
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/checkout", (req, res) => {
  try {
    const payload = req.body;
    if (payload) {
      return res.status(200).send({
        message: "Payment Successful",
      });
    }
    res.status(400).send({
      message: "Payment Failed",
    });
  } catch (error) {
    res.status(500).send({
      message: "Payment Failed",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
