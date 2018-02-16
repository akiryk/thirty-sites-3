"use strict";function IndexController(){this.registerServiceWorker()}IndexController.prototype.registerServiceWorker=function(){navigator.serviceWorker&&navigator.serviceWorker.register("../sw.js").then(function(e){console.log("success regisering sw")}).catch(function(){console.log("failed to register sw!")})},new IndexController;
//# sourceMappingURL=main.js.map
