function IndexController() {
  this.registerServiceWorker();
}

IndexController.prototype.registerServiceWorker = function() {
  if(!navigator.serviceWorker) return;

  navigator.serviceWorker.register('../sw.js').then(function(reg) {
    console.log('success regisering sw');
  }).catch(function() {
    console.log('failed to register sw!');
  })
}


new IndexController();