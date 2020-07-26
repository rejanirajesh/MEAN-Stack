var express = require('express');
var taskHandler = require('./handlers/taskhandler');
var cors = require('cors');

const app = express();
const port = 8000;
const db = require('./config/mongo');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions));


app.use('/api/task', taskHandler);

app.listen(port, function(err) {
    if(err) {
        console.log('Error starting server');
    }
    console.log('Server running on', port);
});