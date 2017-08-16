(function(){
    

    angular
    .module('pwa')
    .factory("pokemon",pokemon);


    function pokemon($resource){

        return $resource("http://pokeapi.co/api/v2/pokemon/?limit=151&offset=0",null,
            {
                list:'GET',
                cache:true //compara lo de cache con el response
            }
        )
    }






}());
