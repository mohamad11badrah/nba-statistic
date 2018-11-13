var express = require('express');
const app = express();
var mysql = require('mysql')
const port = 3002;

var connection = mysql.createConnection({
  host: 'DB',
  user: 'admin',
  password: '123',
  database: 'npa'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
  connection.query('SELECT * FROM user', function(err, results) {
    if (err) throw err
    app.get('/user' , (req, res) => res.send(results));
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
})
