const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

Util.inherits(Ship, MovingObject);

function Ship(pos, game) {
  this.pos = pos;
  this.COLOR = 'black';
  this.RADIUS = 20;
  this.vel = [0, 0];
  this.game = game;
}

module.exports = Ship;
