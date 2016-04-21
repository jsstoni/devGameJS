// Generated by CoffeeScript 1.10.0
(function() {
  var Entity;

  Entity = function(context) {
    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.dy = 0;
    this.width = 0;
    this.height = 0;
    this.color = '#000';
    this.frame = 0;
    this.frameCurrent = 0;
    this.context = context;
    this.listen = {};
    return this;
  };

  Entity.prototype.draw = require('./draw');

  Entity.prototype.move = require('./move');

  Entity.prototype.on = require('./on');

  Entity.prototype.emit = require('./emit');

  module.exports = Entity;

}).call(this);
