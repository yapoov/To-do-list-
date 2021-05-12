const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

const path = __dirname + '/views/';

app.use(express.static(path));

app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
});

var corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const db = require('./model');
const Role = db.role;

db.mongoose
    .connect(db.url, {
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Connected to database");
        initial();
    })
    .catch(err=>{
        console.log("Cannot connect to the database", err);
        process.exit();
    });

app.get('/',(req, res)=>{
    res.json({message:"welcome"});
})

//routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }