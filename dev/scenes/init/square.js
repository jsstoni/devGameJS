devGameJs.addGameObject({
   scene: 'init',
   name : 'squere',
   obj  : function () {

      //Capas y color
      var layer  = 2;
      var color  = '#007';

      //tamaño y posicion
      var x  = 50;
      var y  = 50;
      var width  = 25;
      var height = 25;

      //velocidad
      var speed  = 5;
      
      //botones de control
      var bMoveRight = false;
      var bMoveLeft  = false;
      var bMoveUp    = false;
      var bMoveDown  = false;



      return {
      
         layer   : layer,

         update : function (canvas) {

            devGameJs.module('physics').active(x, y, width, height); //Activar modulo fisico.

            if (bMoveRight)
               x = devGameJs.module('physics').move('x', +speed);

            if (bMoveLeft)
               x = devGameJs.module('physics').move('x', -speed);

            if (bMoveDown)
               y = devGameJs.module('physics').move('y', +speed);
            
            if (bMoveUp)
               y = devGameJs.module('physics').move('y', -speed);
            
         },

         draw : function (canvas) {
            
            canvas.bufferContext.fillStyle = color;
            canvas.bufferContext.fillRect(x, y, width, height);
         },

         keydown : function (nKeyCode) {
            
            if (nKeyCode === 39)
               bMoveRight = true;
            
            if (nKeyCode === 37)
               bMoveLeft  = true;

            if (nKeyCode === 38)
               bMoveUp    = true;

            if (nKeyCode === 40)
               bMoveDown  = true;
         },

         keyup : function (nKeyCode) {

            if (nKeyCode === 39)
               bMoveRight = false;

            if (nKeyCode === 37)
               bMoveLeft  = false;

            if (nKeyCode === 38)
               bMoveUp    = false;

            if (nKeyCode === 40)
               bMoveDown  = false;
         }

      };
   }

});