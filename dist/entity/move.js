// Generated by CoffeeScript 1.10.0
(function() {
  module.exports = function(delta) {
    this.x += (delta * this.dx) / 1000;
    return this.y += (delta * this.dy) / 1000;
  };

}).call(this);