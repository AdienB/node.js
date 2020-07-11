var direBonjour = function() {
    console.log('Bonjour !');
}

var direByeBye = function() {
    console.log('Bye bye !');
}

 var html =function () {
  var txtHtml = '<!DOCTYPE html>'+
  	'<html>'+
  	'	<head>'+
  			'<meta charset="utf-8" />'+
  			'<title>Ma page Node.js !</title>'+
  		'</head>'+
  		'<body>'+
  			'<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
  		'</body>'+
  	'</html>';
  return txtHtml
}
exports.html = html;
exports.direBonjour = direBonjour;
exports.direByeBye = direByeBye;
