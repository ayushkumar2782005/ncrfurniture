app.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    await newContact.save();

    console.log("Saved in DB:", req.body);

    res.json({
      message: "Saved to database ✅",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error saving data ❌",
    });
  }
});