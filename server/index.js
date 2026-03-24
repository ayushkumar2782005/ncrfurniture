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
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ayush2782005_db_user:<db_password>@ncrfurniture.veknwry.mongodb.net/?appName=NCRFURNITURE";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
// Contact Route
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