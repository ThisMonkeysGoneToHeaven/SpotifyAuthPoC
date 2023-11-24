const cors = require('cors');
const express = require('express');
const helloRouter = require('./routers/helloRouter');
const spotifyRouter = require('./routers/spotifyRouter');

const port = 3500;
const app = express();

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers',
   
//   'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });  

app.use('/hello', helloRouter);
app.use('/spotify', spotifyRouter);

app.listen(port, () => {
    console.log('nodejs server is running on port : ' + port);
});