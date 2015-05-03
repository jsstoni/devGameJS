(function(){

   devGameJs.addGameObject('block', function () {

      var nLayer  = 1;
      var nAxisX  = 80;
      var nAxisY  = 50;
      var nWidth  = 25;
      var nHeight = 25;


      return {
      
         layer : nLayer,

         draw : function (canvas) {
            
            canvas.bufferContext.fillStyle = '#006';
            canvas.bufferContext.fillRect(nAxisX, nAxisY, nWidth, nHeight);
         }

      };

   });

})();