var config = require('../config');
module.exports = {
    processTalking: function(socket, event, data) {
        switch (event) {
            case config.GAME_SETTING.SOCKETIO.EVENT.server_send_begin_info:
                {
                    this.sendBeginInfor(socket, event, data);
                    break;
                };
            case config.GAME_SETTING.SOCKETIO.EVENT.server_send_end_of_game:
                {
                    this.sendEndgameInfor(socket, event, data);
                    break;
                };

            default:
                break;
        }

    },
    sendBeginInfor: function(socket, event, data) {
        this.contactBackClient(socket, event, {
            data: {
                id: "azbcdefgh",
                expire: "2 hours",
                sender: "Server-Bot"
            }
        })
    },
    sendEndgameInfor: function(socket, event, data) {
        this.contactBackClient(socket, event, {
            data: {
                id: "azbcdefgh",
                expire: "no-longer",
                status: "forced-to-end-game",
                sender: "Server-Bot"
            }
        })
    },
    contactBackClient: function(socket, event, data) {
        socket.emit(event, data);
    }
}