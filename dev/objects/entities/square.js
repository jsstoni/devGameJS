﻿(function(){


   var square = devGameJs.objects.new();

   square.x      = 600;
   square.y      = 200;
   square.width  = 35;
   square.height = 35;
   square.layer  = 1;
   square.active = false;

   square.colors = {
      off: '#F00',
      on:  '#0F0'
   };

   square.on('activeSquare', function(args){
      this.active = args.active;
   });

   square.draw = function(ctx){
      //Area para el fps
      ctx.fillStyle = this.active ? this.colors.on : this.colors.off;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      
   };

   devGameJs.addObject(square);

})();