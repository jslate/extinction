class Player {
  constructor(game) {

    this.playerRightBodyPosition = [68,46,47,1];
    this.playerLeftBodyPosition = [68,46,10,1];

    this.game = game;
    this.sprite = this.game.add.sprite(100, 200, 'player');

    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.gravity.y = 1500;
    this.sprite.body.setSize(...this.playerRightBodyPosition);
    this.sprite.body.immovable = true;
    // this.sprite.body.collideWorldBounds = true;

    this.game.camera.follow(this.sprite);

    this.sprite.animations.add('right', [0, 1, 2, 1], 5, true);
    this.sprite.animations.add('left', [3, 4, 5, 4], 5, true);

  }

  moveRight() {
    this.sprite.body.setSize(...this.playerRightBodyPosition);
    this.sprite.animations.play('right');
    this.sprite.body.velocity.x = 500;
  }

  moveLeft() {
    this.sprite.body.setSize(...this.playerLeftBodyPosition);
    this.sprite.animations.play('left');
    this.sprite.body.velocity.x = -500;
  }

  stopAnimations() {
    this.sprite.animations.stop();
  }

  jump() {
    if (this.sprite.body.blocked.down) {
      this.sprite.body.velocity.y = -1000;
    }
  }

  stopMoving() {
    this.sprite.body.velocity.x = 0;
  }

}

export default Player;
