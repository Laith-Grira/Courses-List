const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require('./routes/api/items'); //any request is going to this file

const app = express(); //inistialize expess into a variable called app 


//Body-parser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB is connected...'))
    .catch(err => console.log(err));

//use routes
app.use('/api/items', items);

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server started on port ${port}`));