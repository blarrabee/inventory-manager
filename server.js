// import express
var express = require('express')
// initialize app
var app = express()
var path = require('path');
var db = require("./database.js")

// server port
var HTTP_PORT = 8090
// start server
app.listen(HTTP_PORT, () => {
  console.log("server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});
// root endpoint
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));

});
// request all users
app.get("/api/users", (req, res, next) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });

});

// request user by :id
app.get("/api/user/:id", (req, res, next) => {
    var sql = "select * from user where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});
// insert other api endpoints

// default response for any other request

app.use(function(req, res) {
  res.status(404);
});




//const provider = new ethers.providers.Web3Provider(window.ethereum)

//const signer = provider.getSigner()
