app.post("/contact", async (req, res) => {
  try {
    console.log("Contact Form Data:", req.body);

    // No DB — just simulate success
    res.json({
      message: "Form received successfully ✅",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error processing request ❌",
    });
  }
});