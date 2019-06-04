module.exports = {
	processTalking: function(socket, event, data){
		console.log("Data from client",data);
		this.contactBackClient(socket, event, {object: "Send Some Best Greeting!"})
	},
	contactBackClient: function(socket, event, data) {
        socket.emit(event, data);
    }
}	