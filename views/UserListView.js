var UserListView = Backbone.View.extend({
    el: '#page',

    render: function(){
        this.$el.html('CONTENT WILL SHOW HERE!!!');
        var that = this; //Para no tener que utilizar 'bind' en la petición Http de 'fetch()'.
        var users = new UserCollection();

        //TODO... Falla el CORS en la petición Http:
        /*users.fetch({
            success: function(result){
                that.$el.html(result);
            },
            error: function(error){
                console.log("ERROR: " + error);
            }
        });*/

        var result = users.getMockValues();
        that.$el.html('Result: ' + JSON.stringify(result));
    }
});