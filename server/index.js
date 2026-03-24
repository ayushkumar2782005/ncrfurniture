const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Import model
const Contact = require("./models/Contact");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/livspace")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));
Contact Route
app.post("/contact", async (req, res) => {
  console.log("New Contact Form Data:", req.body);

  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    console.log("Saved in DB ✅");

    res.json({ message: "Saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error saving data" });
  }
});

// Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000 🚀");
});