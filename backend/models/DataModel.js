const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
  disabilityCategory: String,
  participants: Number,
  ballotsCompleted: Number,
  ballotsIncomplete: Number,
  accuracy: String,
  timeToComplete: String,
});

module.exports = mongoose.model('DisabilityData', dataSchema);
