function IndexController() {
  this.registerServiceWorker();
}

IndexController.prototype.registerServiceWorker = function() {
  if(!navigator.serviceWorker) return;

  navigator.serviceWorker.register('https://akiryk.github.io/thirty-sites-3/sw.js', {scope: 'https://akiryk.github.io/thirty-sites-3/'}).then(function(reg) {
    console.log('success regisering sw');
  }).catch(function() {
    console.log('failed to register sw!');
  })
}


new IndexController();