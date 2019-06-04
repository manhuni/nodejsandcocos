var MyLayer = cc.Layer.extend({
    helloLabel: null,
    sprite: null,

    init: function() {

        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();

        // add a "close" icon to exit the progress. it's an autorelease object
        var closeItem1 = new cc.MenuItemImage(
            res.s_CloseNormal,
            res.s_CloseSelected,
            function() {
                clientHandler.contactToServer(GAME_CONFIG.SOCKETIO.EVENT.client_request_begin_info, {
                    user: "NVM",
                    text: "Hello, i need to get infor to begin!"
                })
            }, this);
        var closeItem2 = new cc.MenuItemImage(
            res.s_CloseNormal,
            res.s_CloseSelected,
            function() {
                clientHandler.contactToServer(GAME_CONFIG.SOCKETIO.EVENT.client_request_end_of_game, {
                    user: "NVM",
                    text: "Hello, i need to end game now!"
                })
            }, this);


        var menu = new cc.Menu(closeItem1, closeItem2);
        menu.setPosition(cc.p(size.width / 2, size.height / 2));
        menu.alignItemsVertically();

        this.addChild(menu, 1);

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        this.helloLabel = new cc.LabelTTF("Hello World", "Impact", 38);
        // position the label on the center of the screen
        this.helloLabel.setPosition(size.width / 2, size.height - 40);
        // add the label as a child to this layer
        this.addChild(this.helloLabel, 5);

        // add "Helloworld" splash screen"
        this.sprite = new cc.Sprite(res.s_HelloWorld);
        this.sprite.setAnchorPoint(0.5, 0.5);
        this.sprite.setPosition(size.width / 2, size.height / 2);
        this.sprite.setScale(size.height / this.sprite.getContentSize().height);
        this.addChild(this.sprite, 0);
    },
    resData: function(data) {
        console.log(data);
        alert(data);
    }
});

var MyScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        sceneGamePlay = new MyLayer();
        this.addChild(sceneGamePlay);
        sceneGamePlay.init();
    }
});