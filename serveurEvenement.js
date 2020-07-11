var http = require('http');


var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});



var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();
jeu.on('gameover', function(message){
    console.log(message);
});
jeu.on('Info', function(prenom,age){
    console.log('Salut je suis '+prenom+' et j\'ai '+age);
});

jeu.emit('gameover', 'Vous avez perdu !');
jeu.emit('Info','Adrien',21);

server.listen(8080); // Démarre le serveur


server.close(); // Arrête le serveur. Déclenche l'évènement close

// Evenement

server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})
