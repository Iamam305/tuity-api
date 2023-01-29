const { Router } = require("express");
const {
  get_booking_tutors,
  add_booking_tutor,
  cancel_booking,
} = require("../Controller/BookingController");
const router = Router();
const auth = require("../middleware/auth");


router.get("/booking/", auth, get_booking_tutors);
router.post("/booking/", auth, add_booking_tutor);
router.post("/booking/", auth, cancel_booking);

module.exports = router;
