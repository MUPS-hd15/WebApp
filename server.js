/*var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

router.get("/",function(req,res){
    res.json({"error" : false,"message" : "Hello World"});
});

router.route("/users")
    .get(function(req,res){
        var response = {};
        mongoOp.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    });

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");*/

function register() {
    window.location = "registerlogin.html";
}
function validateCredentials() {
    var users = [
    {"username":"user1", "password":"12345"},
    {"username":"user2", "password":"12345"},
    {"username":"user3", "password":"12345"},
    {"username":"user4", "password":"12345"},
    {"username":"user5", "password":"12345"},
    {"username":"user6", "password":"12345"},
    {"username":"user7", "password":"12345"},
    {"username":"user8", "password":"12345"},
    {"username":"user9", "password":"12345"}
  ];
    var enteredUsername = $('[name="username"]').val();
    var enteredPassword = $('[name="password"]').val();
    //alert(enteredPassword);
    
    var matching = 0;
    $(jQuery.parseJSON(JSON.stringify(users))).each(function() {
        var currUsername = this.username;
        var currPassword = this.password;
        
        if ((enteredUsername == currUsername) && (enteredPassword == currPassword)) {
            matching = 1;
        }
    });
    if (Boolean(matching)) {
        //alert("Login successful");
        window.location = "order.html";
    }
    else {
        $("#loginfail").html("Your username or password is incorrect.").css({"color":"red"});;
    }
}
function createAccount() {
    window.location = "order.html";
}
function getStatus() {
    window.location = "orderSummary.html";
}
function goHome() {
    window.location = "index.html";
}



/*
//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27000/data';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
      console.log('Connection established to', url);
      //alert("hi");

    // do some work here with the database.
      var collection = db.collection('users');

      var user1 = {name: 'user1', password: '12345'};
      var user2 = {name: 'user2', password: '12345'};
      var user3 = {name: 'user3', password: '12345'};
      
      collection.insert([user1, user2, user3], function (err, result) {
          if (err) {
              console.log(err);
          }
          else {
              console.log('success!');
              //db.close();
          }
      });
      console.log('db disconnected successfully');
  }
});
*/

