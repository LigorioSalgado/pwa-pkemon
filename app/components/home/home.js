(function(){
    
        var home = {
            templateUrl: '/app/components/home/home.html',
            controller: homeCtrl
        }
    
        function randomNumber(){
            var max = 2;
            return Math.floor(Math.random()*max) + 1
        }
    
        function pad(n){
            if(n<10){
                return "00"+n;
            }
            if(n>=10 && n<100){
                return "0"+n;
            }
            return n;
    
    
        }
    
        function homeCtrl(pokemon) {
            var cnx = this;
            cnx.pokes = [];
    
            pokemon.list().$promise.then(
    
                function(data){
                    data.results.map(function (p,i) {
                        cnx.pokes.push({
                            'span':{
                                row:randomNumber(),'col':randomNumber()
                            },
                            'title':p.name,
                            'background':'green',
                            'icon':'/img/pokemon/'+pad(i+1)+'-80x80.png'
    
                        })
    
                    })
                }
    
    
            );
    
            console.log(cnx.pokes);
    
    
    
        }
        angular
            .module('pwa')
            .component('home',home);
    
    
    
    
    
    
    
    
    
    })();