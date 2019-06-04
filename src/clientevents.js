var socket = io();

var clientHandler = {
    contactToServer: function(event, data) {
        socket.emit(event, data);
    }
};
socket.on(GAME_CONFIG.SOCKETIO.EVENT.GETSOMEDATAFROMSERVER, function(data){
    console.log("I got some message here: ");
    sceneGamePlay.resData(data);
});