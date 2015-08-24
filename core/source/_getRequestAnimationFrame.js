module.exports = function _getRequestAnimationFrame(interval){
   return   window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function (callback){
               window.setTimeout(callback, interval);
            };
};