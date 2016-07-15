cc.Class({
    extends: cc.Component,

    properties: {
        anim: cc.Animation
    },

    // use this for initialization
    init: function (game) {
        this.game = game;
        this.node.active = false;
    },

    playIntro: function () {
        this.node.active = true;
        this.anim.play('start');
    },

    onFinish: function () {
        console.log("onFinish");
        this.game.playerReady();
        this.node.active = false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
