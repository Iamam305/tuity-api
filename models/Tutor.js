const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true, 
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  timeSlots:[{
    type:String,
  }],
  description: {
    type: String,
    required: true,
  },
});
module.exports = Tutor = mongoose.model('tutor',TutorSchema);