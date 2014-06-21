var idUser = 0;

exports.socket = function(sock) {
	console.log('User ' + idUser++ + ' connected');
	var address = sock.handshake.address;
	console.log("New connection from " + address.address + ":" + address.port);

}
