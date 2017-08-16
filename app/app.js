(function() {



    angular
    .module('pwa',["ngRoute","ngResource","ngMaterial"]);


    if('serviceWorker' in navigator){
        
        
                navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
                    console.log('ServiceWorker registration success scope:', registration.scope)
                }).catch(function (err) {
                    console.log('ServiceWorker registration failed:', err)
        
                })
        
    }




}());