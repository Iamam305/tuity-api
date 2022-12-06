const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const AuthRouter = require('./Routes/Auth');
const TutorRouter = require('./Routes/Tutor');


const app = express();
app.use(express.json());
 
app.use('/api',AuthRouter);
app.use('/api',TutorRouter); 

 
// connecting to mongoDB and then running server on port 4000
const dbURI = config.get('dbURI');
const port = process.env.PORT || 5000;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then(() => app.listen(port, () => console.log(`Server running on http://localhost:${port}`)))
  .catch((err) => console.log(err));