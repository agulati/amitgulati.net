var http = require('http')
  , fs = require('fs')
  , async = require('async')
  , express = require('express')
  , _ = require('underscore')

require('express-namespace');

var app = express()

app.configure(function () {
  app.set('views', __dirname + '/views')
  app.set('view engine', 'hbs')
  app.set('port', 9000)
  app.use(app.router)
  app.use(express.static('./public'));
  // app.use(express.favicon('./public/img/favicon.ico'));
})

app.get('/', function (req, res) {
  res.render('index')
})

var httpServer = http.createServer(app).listen(app.get('port'), function () {
  console.log("HTTP server listening on port %s in %s mode", app.get('port'), app.settings.env)
})

