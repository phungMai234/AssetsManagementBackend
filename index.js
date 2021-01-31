const express = require('express');
const app = express();
const db = require('./database');

app.get('/', function (req, res) {
  res.send('Hello World');
});

db.sync({
  force: true,
})
  .then(() => {
    console.log('Connect db success');
    app.listen(3000, function () {
      console.log('Server is running ...');
    });
  })
  .catch((err) => {
    console.log('error:', err);
  });
