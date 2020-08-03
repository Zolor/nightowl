var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 100 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var upKey;
var owl;

function preload ()
{
    this.load.image('background', 'http://labs.phaser.io/assets/skies/bigsky.png');
    this.load.image('owl', 'static/nightowl.png');
}

function create ()
{
    this.add.image(400, 300, 'background');
    owl = this.physics.add.image(200, 200, 'owl');
    owl.setScale(2);
    spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    owl.setCollideWorldBounds(true);

}
function update() {
    owl.angle = owl.body.velocity.y / 3;
    if (Phaser.Input.Keyboard.JustDown(spacebar)){
        owl.body.velocity.y = -150;
        owl.body.gravity.y = 150;
        owl.angle = -40;
    }
    else if (owl.angle > 30){
        owl.angle = 30;
    }
}