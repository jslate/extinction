import 'phaser-shim';

import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, 'game', null);
  }
}

new Game();
