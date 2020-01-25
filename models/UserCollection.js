var UserCollection = Backbone.Collection.extend({
    //La 'baseUrl' está definida en 'restFacadeService.js'.
    url: '/users',

    getMockValues: function(){
        var values  = [{
            name: 'Fulano1'
        },
        {
            name: 'Fulano2'
        },
        {
            name: 'Fulano3'
        }];
        
        return values;
    }
});