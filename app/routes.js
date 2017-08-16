(function(){
    
        angular
            .module('pwa')
            .config(config);
    
    
            function config($routeProvider) {
                $routeProvider
                    .when('/',
                        {template:'<home></home>'})
                    .otherwise('/');
    
    
            }
    
    
    
    
    
    
    
    
    })();