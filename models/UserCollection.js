var UserCollection = Backbone.Collection.extend({
    //La 'baseUrl' está definida en 'restFacadeService.js'.
    url: '/users',

    getMockValues: function(){
        var values  = [{
            firstname: 'Fulano1',
            lastname: 'Apellido Fulano1',
            age: 31
        },
        {
            firstname: 'Fulano2',
            lastname: 'Apellido Fulano2',
            age: 32
        },
        {
            firstname: 'Fulano3',
            lastname: 'Apellido Fulano3',
            age: 33
        }];
        
        return values;
    }
});