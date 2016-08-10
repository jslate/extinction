import Player from './Player'
import Tilemap from './Tilemap'

class Level1State extends Phaser.State {
  preload() {
    this.load.image('background', '/images/background.jpg');
    this.load.spritesheet('player', '/images/player.png', 120, 76);
    this.load.image('tiles', '/images/platforms.png');
    this.load.tilemap('tilemap', '/tilemaps/platforms.csv');
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.load.audio('unibabies', ['/audio/unibabies.m4a']);
  }


  create() {
    this.game.add.tileSprite(0, 0, 8192, 1178, 'background');
    let tilemap = this.game.add.tilemap('tilemap', 64, 64);
    tilemap.addTilesetImage('tiles');
    let layer = tilemap.createLayer(0);
    this.game.world.setBounds(0, 0, 8192, 1178);
    layer.resizeWorld();

    this.game.physics.startSystem(Phaser.Physics.Arcade);

    this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
    this.game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 800;
    this.player.body.collideWorldBounds = true;

    this.game.camera.follow(this.player);

    this.game.physics.arcade.gravity.y = 100;

    this.player.animations.add('right', [0, 1, 2, 1], 5, true);
    this.player.animations.add('left', [3, 4, 5, 4], 5, true);

    let music = this.game.add.audio('unibabies');
    music.play();
  }

  update() {
    this.player.body.velocity.x = 0;
    if (this.cursors.right.isDown) {
      this.player.animations.play('right');
      this.player.body.velocity.x = 500;
    } else if (this.cursors.left.isDown) {
      this.player.animations.play('left');
      this.player.body.velocity.x = -500;
    } else {
      this.player.animations.stop();
    }
    if (this.cursors.up.isDown) {
      this.player.body.velocity.y = -500;
    }
    this.game.debug.cameraInfo(this.camera, 32, 32);
  }
}

export default Level1State;
