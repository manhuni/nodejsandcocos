var socket = io();

var clientHandler = {
    contactToServer: function(event, data) {
        socket.emit(event, data);
    }
};

socket.on(GAME_CONFIG.SOCKETIO.EVENT.server_send_begin_info, function(data){
    sceneGamePlay.resData(data.data);
});

socket.on(GAME_CONFIG.SOCKETIO.EVENT.server_send_end_of_game, function(data){
    sceneGamePlay.resData(data.data);
});

