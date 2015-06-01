var express = require('express');
var router = express.Router();

function getIpHost(){
    var local=java.net.InetAddress.getLocalHost();	
    var ip=local.getHostAddress();
  return ip;
}




/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.get("Accept"));
  console.log(req.accepts('html', 'text/plain', 'json'));

  var local=java.net.InetAddress.getLocalHost();
  var ip=local.getHostAddress();
  

  var sequence = (Math.random() * 10000) + 1);

  
  var payload = {
	"message" : "hello world",
	"author" : "Amine Tayaa",
	"sequence" : sequence.toString(),
	"ip" : ip
  }

  if (req.accepts('text/html', 'text/plain', 'application/json') === 'text/plain') {
	res.send(payload.message);
  }	else if (req.accepts('text/html', 'text/plain', 'application/json') === 'application/json') {
	  res.send(payload);	
  } else {
      res.render('message', payload);	
  }

});

module.exports = router;
