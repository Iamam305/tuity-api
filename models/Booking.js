const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  userId: {
    type: String,
  },
  tutors: [
    {
      tutorId: {
        type: String,
      },
      time: String,
      name: String,
      price: Number,
    },
  ],
});

module.exports = Booking = mongoose.model("booking",CartSchema);