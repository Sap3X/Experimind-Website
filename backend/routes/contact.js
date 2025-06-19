import express from "express";
import Contact from "../models/Contact.js"; // Assuming you have a Contact model defined in models/Contact.js

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { name, email, phone, companyname, reason } = req.body;

    const newContact = new Contact({
      name,
      email,
      phone,
      companyname,
      reason
    });

    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




export default router;