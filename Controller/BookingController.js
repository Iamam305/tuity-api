const Booking = require("../models/Booking");
const Tutor = require("../models/Tutor");

const get_booking_tutors = async (req, res) => {
  const UserId = req.user.id;
  try {
    let bookings = Booking.findOne(UserId);
    if (bookings && bookings.tutors.length) {
      res.send(bookings);
    } else {
      res.send(null);
    }
  } catch (error) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

const add_booking_tutor = async (req, res) => {
  const userId = req.user.id;

  // const { TutorId, time } = req.body;
  const { TutorId } = req.body;


  try {
    let bookings = await Booking.findOne({ userId });

    let tutor = await Tutor.findOne({ _id: TutorId });

    if (!tutor) {
      res.status(404).send("tutor not found!");
    }

    const price = tutor.price;
    const name = tutor.name;

    if (bookings) {
      bookings.tutors.push({ TutorId, time, price, name });
      bookings = await bookings.save();
      return res.status(201).send(bookings);
    } else {
      const newBooking = await Booking.create({
        TutorId,
        bookings: [{ TutorId, price, name }],
        // bill: bookings.length * price,
      });
      return res.status(201).send(newBooking);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

const cancel_booking = async (req, res) => {
  const userId = req.user.id;
  const { tutorId, time } = req.body;

  try {
    let bookings = await Booking.findOne({ userId });

    let TutorIndex = bookings.tutors.findIndex((e) => e.tutorId == tutorId);
    if (TutorIndex > -1) {
      bookings.tutor.splice(itemIndex, 1);
    }
    bookings = await bookings.save();
    return res.status(201).send(bookings);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports = {add_booking_tutor, get_booking_tutors, cancel_booking}