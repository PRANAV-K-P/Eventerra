const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    host: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
    participants: [
      {
        userId: { type: String },
        name: { type: String },
        email: { type: String },
      },
    ],
    capacity: {
      type: Number,
    },
    eventLink: {
      type: String,
      required: true,
    },
    eventStatus: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
