const express = require('express');
const path = require('path');
const parser = require('body-parser');
const Router = require('./routes');

var app = express();
require('./db');

app.use(Router);

app.get('/', (req, res) => {
  res.send("FUCK");
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started on: " + port);
});
