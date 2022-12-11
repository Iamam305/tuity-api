const { Router } = require("express");
const {
  get_booking_tutors,
  add_booking_tutor,
  cancel_booking,
} = require("../Controller/BookingController");
const router = Router();
const auth = require("../middleware/auth");
router.get("/booking/:id", auth, get_booking_tutors);
router.post("/booking/:id", auth, add_booking_tutor);
router.post("/booking/:userId/:itemId", auth, cancel_booking);

module.exports = router;
