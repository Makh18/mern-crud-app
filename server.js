const express = require('express'); 
const mongoose = require('mongoose');
// const cors = require('cors');
const router = require('./routes/index');

const app = express(); 
const PORT = 3001; 
const MONGODB_URI = "mongodb+srv://eline:yc80v5tP0YznKoHx@cluster0.qivmm.mongodb.net/mernart?retryWrites=true&w=majority"; 
//yc80v5tP0YznKoHx
// app.use(cors())
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use('/api', router); 

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false }); 
mongoose.connection.once('open', function() { 
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose Connection Error : ' + error);
});

app.listen(PORT, function() { 
  console.log(`Server listening on port ${PORT}.`);
});