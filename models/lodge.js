const { Schema, model } = require('mongoose');

const lodgeSchema = new Schema(
  {
    checkin: { type: Date, required: true },
    checkout: { type: Date, required: true },
    adults: { type: Number, required: true },
    children: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    rooms: { type: Number, required: true },
  },
  { timestamps: true }
);

const Lodge = model('lodge', lodgeSchema);

module.exports = Lodge;
