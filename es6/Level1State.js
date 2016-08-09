class Level1State extends Phaser.State {
  preload() {
    this.load.image('background', '/images/background.jpg');
    
    // this.game.load.image('mushroom', '/images/mushroom2.png');
    // this.game.load.image('tiles', '/tilesets/TileA5.png');
    // this.game.load.tilemap('map', '/tilemaps/town_tile_layer_1.csv', null, Tilemap.CSV);
    // this.game.load.sound();
  }


  create() {
    let background = new Phaser.Sprite(this, 0, 0, 'background');
    this.game.stage.addChild(background);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.world.setBounds(0, 0, background.width, background.height);
    
    // this.map = new Tilemap(this.game, 'map', 32, 32)
    // this.map.addTilesetImage('tiles');
    // let layer = this.map.createLayer(0);
    // layer.resizeWorld();
    // this.game.world.setBounds(0, 0, 1344, 672);
    // const center = { x: this.game.world.centerX, y: this.game.world.centerY }
    // this.game.physics.startSystem(Phaser.Physics.Arcade);
    // this.player = new Player(this.game, center.x, center.y, 'mushroom');
    // this.game.physics.arcade.enable(this.player);
    // this.player.body.collideWorldBounds = true;
    // this.game.camera.follow(this.player);
  }

  update() {
    
    if (this.cursors.right.isDown) {
      this.game.camera.x += 200;
    }
    if (this.cursors.left.isDown) {
      this.game.camera.x -= 200;
    }
    if (this.cursors.up.isDown) {
      this.game.camera.y -= 200;
    }
    if (this.cursors.down.isDown) {
      this.game.camera.y += 200;
    }

    // this.player.body.velocity.setTo(0, 0);
    // if (this.game.camera.) {}
    // console.log(this.game.camera.x - cameraPreviousX);
    // var cameraPreviousX = this.game.camera.x;
  }
}

export default Level1State;
