var cacheName = 'v1';

var filesToCache = [
    '/',
    '/index.html',
    '/img/app/menu.svg',
    '/app/components/home/home.html',
    '/node_modules/angular-resource/angular-resource.min.js',
    '/node_modules/angular-route/angular-route.min.js',
    '/node_modules/angular-aria/angular-aria.min.js',
    '/node_modules/angular-animate/angular-animate.min.js',
    '/node_modules/angular-animate/angular-animate.min.js',
    '/node_modules/angular-messages/angular-messages.min.js',
    '/node_modules/angular-material/angular-material.min.js',
    '/app/app.js',
    '/app/routes.js',
    '/app/service/pokes.js',
    '/app/components/home/home.js',
    '/node_modules/angular-material/angular-material.min.css',
    'http://pokeapi.co/api/v2/pokemon/?limit=151&offset=0'
];

function pad(n) {
    if(n<10){
        return "00"+n;
    }
    if(n>=10 && n<100){
        return "0"+n;
    }
    return n;
}

for(var i =1;i<=151;i++){
    filesToCache.push("/img/pokemon/"+pad(i)+'-80x80.png');
}






self.addEventListener('install', function(event){
    console.log('Installed');

    event.waitUntil(
        caches.open(cacheName)
            .then(function(cache){
                return cache.addAll(filesToCache)
            })
    );
    event.waitUntil(self.skipWaiting());
});



self.addEventListener('activate', function(event) {
    var cacheWhitelist = ['v1'];
    event.waitUntil(
        caches.keys(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) == -1) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    );
});

self.addEventListener('fetch', function(event) {
    var requestURL = new URL(event.request.url);
    // Network, then cache, then fallback for home page
    if(requestURL=='/')  {
        event.respondWith(
            fetch(event.request).then(function() {
                return caches.match(event.request);
            }).catch(function() {
                //return caches.match('offline.html');
            })
        );
    }

    // Cache, then network, then fallback for other urls
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        }).catch(function() {
            //return caches.match('offline.html');
        })
    );
});

self.addEventListener('push', function(event){
    console.log('Push message received', event);

});