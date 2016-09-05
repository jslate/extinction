class Mammal {
  constructor(game, x, y, mammals) {
    let sprite = game.add.sprite(x, y, 'mammal');
    mammals.add(sprite);
  }
}

export default Mammal;
