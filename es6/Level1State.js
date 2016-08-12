import Player from './Player'
// import Meteor from './Meteor'
import Tilemap from './Tilemap'

class Level1State extends Phaser.State {
  preload() {
    this.load.image('background', '/images/background.jpg');
    this.load.spritesheet('player', '/images/player.png', 120, 49);
    this.load.spritesheet('meteor', '/images/meteors.png', 200, 100);
    this.load.image('tiles', '/images/platforms.png');
    this.load.tilemap('tilemap', '/tilemaps/platforms.csv');
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.load.audio('unibabies', ['/audio/unibabies.ogg']);

    this.playerRightBodyPosition = [68,46,47,1];
    this.playerLeftBodyPosition = [68,46,10,1];
  }


  create() {
    this.game.add.tileSprite(0, 0, 8192, 1178, 'background');
    let tilemap = this.game.add.tilemap('tilemap', 64, 64);
    tilemap.addTilesetImage('tiles');
    this.layer = tilemap.createLayer(0);
    this.game.world.setBounds(0, 0, 8192, 1178);
    this.layer.resizeWorld();
    tilemap.setCollisionByExclusion([-1]);

    this.game.physics.startSystem(Phaser.Physics.Arcade);

    this.player = new Player(this.game);

    this.game.physics.arcade.gravity.y = 300;

    this.meteor = this.game.add.sprite(550, -100, 'meteor');
    this.meteor.angle = 110;
    this.game.physics.arcade.enable(this.meteor);
    this.meteor.body.allowGravity = false;
    this.meteor.anchor.setTo(0.5, 0.5);
    this.meteor.body.setSize(100, 100, -20, 50);


    let music = this.game.add.audio('unibabies');
    music.loop = true;
    music.play();
  }

  update() {

    this.game.physics.arcade.collide(this.player.sprite, this.meteor, () => {
      alert('you died!');
      this.meteor.position.y = -100;
    });

    this.game.physics.arcade.velocityFromAngle(this.meteor.angle, 300, this.meteor.body.velocity);

    if (this.meteor.position.y > 2000) {
      this.meteor.position.y = -100;
      this.meteor.position.x = this.player.sprite.position.x + (Math.random() * 200 - 50);
    }

    this.game.physics.arcade.collide(this.player.sprite, this.layer);
    this.player.stopMoving();
    if (this.cursors.right.isDown) { this.player.moveRight(); }
    else if (this.cursors.left.isDown) { this.player.moveLeft(); }
    else { this.player.stopAnimations(); }
    if (this.cursors.up.isDown) { this.player.jump(); }
    // this.game.debug.spriteInfo(this.player.sprite, 32, 32);
    // this.game.debug.body(this.meteor);
    // this.game.debug.body(this.player.sprite);
  }
}

export default Level1State;
