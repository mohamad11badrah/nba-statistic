var express = require('express');
const app = express();
var mysql = require('mysql');
const port = 3002;
const cors = require('cors');


app.use(cors());
var connection = mysql.createConnection({
  host: 'DB',
  user: 'admin',
  password: '123',
  database: 'nba'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
  connection.query('SELECT * FROM player', function(err, results) {
    if (err) throw err
    app.get('/players' , (req, res) => res.send(results));
  })
  connection.query('SELECT * FROM games', function(err, results) {
    if (err) throw err
    app.get('/games' , (req, res) => res.send(results));
  })
  connection.query('SELECT * FROM report', function(err, results) {
    if (err) throw err
    app.get('/reports' , (req, res) => res.send(results));
  })
  connection.query('SELECT * FROM depthCharts', function(err, results) {
    if (err) throw err
    app.get('/depth' , (req, res) => res.send(results));
  })
  connection.query('SELECT * FROM team', function(err, results) {
    if (err) throw err
    app.get('/teams' , (req, res) => res.send(results));
  })
  require('http').createServer(app).listen(port, () => console.log(`Listening on port ${port}`));
})
