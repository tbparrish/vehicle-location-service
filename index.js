(function(){
  var MicroService = require('rm-node-ms');
  ms = new MicroService({
    "rabbit": {
      "serverPin": [{"role":"vehicle-location", "cmd":"*"}]
    }
  });
})();
