const Tutor = require("../models/Tutor.js");
const User = require("../models/Users.js");

const get_Tutors = async (req, res) => {
  Tutor.find()
    .sort({ date: -1 })
    .then((tutors) => res.json(tutors));
};

const post_Tutor = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
  console.log(user?.role);
    if (user.role == "admin") {
      const newTutor = new Tutor(req.body);
      newTutor.save().then((Tutor) => res.json(Tutor));
    } else {
      res.status(403).json("You are not allowed to do this action!");
    }
  } catch (error) {
    res.status(500);
  }
};

const update_Tutor = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user.role == "admin") {
      Tutor.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (
        Tutor
      ) {
        Tutor.findOne({ _id: req.params.id }).then(function (Tutor) {
          res.json(Tutor);
        });
      });
    } else {
      res.status(403).json("You are not allowed to do this action!");
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

const delete_Tutor = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user.role == "admin") {
      Tutor.findByIdAndDelete({ _id: req.params.id }).then(function (Tutor) {
        res.json({ success: true });
      });
    } else {
      res
        .status(403)
        .json("You are not allowed to do this action!" + user.role);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = { get_Tutors, post_Tutor, delete_Tutor, update_Tutor };
