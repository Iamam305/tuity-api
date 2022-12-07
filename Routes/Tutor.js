const { Router } = require("express");
const {
  get_Tutors,
  post_Tutor,
  update_Tutor,
  delete_Tutor,
} = require("../Controller/TutorController");
const auth = require("../middleware/auth.js"); 
const router = Router();

router.get("/tutors", auth, get_Tutors);
router.post("/tutor", auth, post_Tutor);
router.put("/tutor/:id", auth, update_Tutor);
router.delete("/tutor/:id", auth, delete_Tutor);

module.exports = router;
