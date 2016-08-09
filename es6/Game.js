import 'phaser-shim';
import $ from 'jquery';
import jQuery from 'jquery';
import Level1State from './Level1State.js'

window.$ = $;
window.jQuery = jQuery;

class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, 'game', null);
    this.state.add('Level1State', Level1State, false);
    this.state.start('Level1State');
  }
}

new Game();
