// Generated by CoffeeScript 1.10.0
(function() {
  module.exports = function(timestamp) {
    var delta;
    if (!this.timeElapsed) {
      this.timeElapsed = timestamp;
    }
    delta = timestamp - this.timeElapsed;
    this.timeElapsed = timestamp;
    return delta;
  };

}).call(this);
