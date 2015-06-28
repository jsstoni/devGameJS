(function (){

   'use strict';

   //Ningunos de los atributos son obligatorios ni la ejecucion del mismo
   devGameJs.setup({width: 900, height: 400});

   //Inica el juego
   devGameJs.startGame();

   //desactivar modulo loading
   // devGameJs.module('loading').off();

   //Como agragar imaganes al loading, Nota: solo soporta *.png
   devGameJs.module('loading').load([
      ['ball', 'ball.png'],
      ['grid', 'http://2.bp.blogspot.com/-g1mJ9Km5PoQ/TtAe5x5Ju2I/AAAAAAAAATY/gnbzTvldBP8/s1600/cuadr%25C3%25ADcula.PNG']
   ]);

   devGameJs.module('text').setup({color: 'green'});

   //Ningunos de los atributos son obligatorios ni la ejecucion del mismo
   /*devGameJs.module('text').setup(
                                    {
                                       customize: true, image: 'spriteFont.png', 
                                       mapper: '123456789*0#', row: 4, column: 3
                                    }
                                 );*/

   //Extender framework con los modulos
   devGameJs.ext.resource = devGameJs.module('loading');
   devGameJs.ext.drawText = devGameJs.module('text').draw;

})();