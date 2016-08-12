import 'phaser-shim';
import $ from 'jquery';
import jQuery from 'jquery';
import Level1State from './Level1State.js'

window.$ = $;
window.jQuery = jQuery;

class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, 'game', {preload: this.preload, create: this.create});
  }

  preload() {
    this.load.image('background', '/images/background.jpg');
    this.load.spritesheet('player', '/images/player.png', 120, 49);
    this.load.spritesheet('meteor', '/images/meteors.png', 200, 100);
    this.load.image('tiles', '/images/platforms.png');
    this.load.tilemap('tilemap', '/tilemaps/platforms.csv');
    this.load.audio('unibabies', ['/audio/unibabies.ogg']);
  }

  create() {
    this.state.add('Level1State', Level1State, false);
    this.state.start('Level1State');
  }

}

new Game();
