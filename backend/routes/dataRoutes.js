const express = require('express');
const router = express.Router();
const DisabilityData = require('../models/DataModel');

// Get all data
router.get('/', async (req, res) => {
  try {
    const data = await DisabilityData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add sample data
router.post('/add', async (req, res) => {
  const sampleData = [
    { disabilityCategory: "Blind", participants: 5, ballotsCompleted: 1, ballotsIncomplete: 4, accuracy: "34.5%, n=1", timeToComplete: "1199 sec, n=1" },
    { disabilityCategory: "Low Vision", participants: 5, ballotsCompleted: 2, ballotsIncomplete: 3, accuracy: "98.3%, n=2", timeToComplete: "1716 sec, n=3" },
    { disabilityCategory: "Dexterity", participants: 5, ballotsCompleted: 4, ballotsIncomplete: 1, accuracy: "98.3%, n=4", timeToComplete: "1672.1 sec, n=4" },
    { disabilityCategory: "Mobility", participants: 3, ballotsCompleted: 3, ballotsIncomplete: 0, accuracy: "95.4%, n=3", timeToComplete: "1416 sec, n=3" }
  ];

  try {
    await DisabilityData.insertMany(sampleData);
    res.status(201).json({ message: "Sample data added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
