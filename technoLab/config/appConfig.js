    var config = {
        type: Phaser.AUTO,
        width: 1136,
        height: 640,
        parent: 'technoLab',
        physics: {
            default: "arcade",
            arcade: {
            //gravity: { y: 60 }
            },
            matter: {
                //debug: true
            }
        },
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        scene:[Main,Instructions,PlayGame,Settings,GravityGame,AngleGame, IdentifyShape]
    };

    var game = new Phaser.Game(config);