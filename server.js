const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const cors = require('cors')
require('dotenv').config()
const AuthRouter = require('./Routes/Auth');
const TutorRouter = require('./Routes/Tutor');
const BookingRouter = require('./Routes/Booking')

const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.json());
 
app.use('/api',AuthRouter);
app.use('/api',TutorRouter); 
app.use('/api',BookingRouter); 

 
// connecting to mongoDB and then running server on port 4000
const dbURI = config.get('dbURI');
const port = process.env.PORT || 5000;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(() => app.listen(port, () => console.log(`Server running on ${port}`)))
  .catch((err) => console.log(err));