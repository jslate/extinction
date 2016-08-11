class Meteor extends Phaser.Sprite {
  constructor(game, x, y, key) {
    super(game, x, y, key);
    this.game.stage.addChild(this);
  }
}

export default Meteor;