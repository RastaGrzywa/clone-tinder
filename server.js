import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import Cards from './model/Cards.js';

// config
const app = express();
const port = process.env.PORT || 8001; 
dotenv.config()
const __dirname = path.resolve();

var corsOptions = {
  origin: 'https://clone-tinder.herokuapp.com/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// middleware
app.use(cors());
app.use(bodyParser.json());
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
//   next();
// });



// db config
mongoose.connect(process.env.DB_CONNECTION_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
.then (() => {
    console.log("MongoDB successfully connected");
})

// api endpoints
app.get('/tinder/cards', (req, res) => {
  Cards.find({}, (err, data) => {
    if (err){
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err){
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
})


app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// //production mode
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(`${__dirname}/client/build`));
//   app.get('*', (req, res) => {
//       res.sendfile(`${__dirname}/client/build/index.html`);
//   })
// };
// // //build mode
// app.get('*', (req, res) => {
//     res.sendFile(`${__dirname}/client/public/index.html`);
// });

// listener
app.listen(port, () => {
  console.log(`listen on port: ${port}`);
})
