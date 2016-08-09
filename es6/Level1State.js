import Player from './Player'

class Level1State extends Phaser.State {
  preload() {
    this.load.image('background', '/images/background.png');
    this.load.spritesheet('player', '/images/player.png', 120, 76);
    this.load.image('tiles', '/images/platforms.png');
    this.load.tilemap('tilemap', '/tilemaps/platforms.csv');
  }


  create() {
    let background = new Phaser.Sprite(this, 0, 0, 'background');
    this.game.stage.addChild(background);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.world.setBounds(0, 0, 8192, 1178);
    this.game.physics.startSystem(Phaser.Physics.Arcade);
    this.game.physics.arcade.gravity.y = 100;
    this.player = new Player(this.game, 0, 0, 'player');
    this.player.animations.add('right', [0, 1, 2, 1], 5, true);
    this.player.animations.add('left', [3, 4, 5, 4], 5, true);
    this.game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 800;
    this.game.camera.follow(this.player);
  }

  update() {
    this.player.body.velocity.x = 0;
    if (this.cursors.right.isDown) {
      this.player.animations.play('right');
      this.player.body.velocity.x = 200;
    } else if (this.cursors.left.isDown) {
      this.player.animations.play('left');
      this.player.body.velocity.x = -200;
    } else {
      this.player.animations.stop();
    }
    if (this.cursors.up.isDown) {
      this.player.body.velocity.y = -500;
    }
    this.game.debug.cameraInfo(this.game.camera, 32, 32);
  }
}

export default Level1State;
