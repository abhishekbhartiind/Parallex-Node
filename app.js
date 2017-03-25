var express = require('express'),
	partials = require('express-partials'),
	app = express(),
	routes = require('./routes')
	;

  app.set('view engine', 'ejs');
  app.set('view options', {defaultLayout: 'layout'});

  app.use(partials());
  app.use(express.static(__dirname + '/static'));

  //routes
  app.get('/', routes.index);

  app.get('/error', function(req, res, next){
   	next(new Error('A contrived error'));
  });
  app.listen(3010);
  console.log("App server running on port 3010");
