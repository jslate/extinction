import Player from './Player'
import Meteor from './Meteor'
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

    this.player = this.game.add.sprite(100, 200, 'player');
    this.game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 1500;
    this.player.body.collideWorldBounds = true;

    this.game.camera.follow(this.player);

    this.game.physics.arcade.gravity.y = 300;

    this.player.animations.add('right', [0, 1, 2, 1], 5, true);
    this.player.animations.add('left', [3, 4, 5, 4], 5, true);

    this.meteor = this.game.add.sprite(this.game, 0, 0, 'meteor');
    this.game.physics.arcade.enable(this.meteor);

    let music = this.game.add.audio('unibabies');
    music.loop = true;
    music.play();
  }

  update() {
    this.player.body.velocity.x = 0;
    this.game.physics.arcade.collide(this.player, this.layer);
    if (this.cursors.right.isDown) {
      this.player.animations.play('right');
      this.player.body.velocity.x = 500;
    } else if (this.cursors.left.isDown) {
      this.player.animations.play('left');
      this.player.body.velocity.x = -500;
    } else {
      this.player.animations.stop();
    }
    if (this.cursors.up.isDown && this.player.body.blocked.down) {
      this.player.body.velocity.y = -1000;
    }
    this.game.debug.spriteInfo(this.player, 32, 32);
    this.game.physics.arcade.velocityFromAngle(this.meteor.angle, 300, this.meteor.body.velocity);
  }
}

export default Level1State;
