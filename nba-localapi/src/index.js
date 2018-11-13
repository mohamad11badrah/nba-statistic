var express = require('express');

const app = express();

var mysql = require('mysql')

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
    console.log(results[0].id)
    console.log(results[0].name)
    app.get('/' , (req, res) => res.send(results[0]));
    app.listen(3002)
  })
})

