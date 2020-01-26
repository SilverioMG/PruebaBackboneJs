var UserListView = Backbone.View.extend({
    el: '#page', //Indica el 'id' del elemento Html donde se renderizará esta vista.
    templateUrl: "./views/UserListViewTemplate.html", //Url del archivo que contiene la plantilla de esta Vista. Se descarga del server en el método 'initialize()'.
    templateHtml: "", //Html de la plantilla cargada del server.

    initialize: function(){
        //Peticion Http Asíncrona para cargar la plantilla de esta Vista:
        //var that = this; //Se utiliza para evitar el 'bind()'.
        $.get(this.templateUrl, function(templateHtml){
            //that.templateHtml = templateHtml;
            this.templateHtml = templateHtml;
            //that.render();
            this.render();
        }.bind(this));
    },

    render: function(){
        this.$el.html('CONTENT WILL SHOW HERE!!!');
        var that = this; //Para no tener que utilizar 'bind()' en la petición Http de 'fetch()'.
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

        var userList = users.getMockValues();
        console.log('Result: ' + JSON.stringify(userList));
        //this.$el.html('Result: ' + JSON.stringify(userList));
        //var template = _.template($('#userlisttemplate').html(), {users: userList}); //Si la plantilla estuviese definida en el Html con un id 'userlisttemplate' de la página se cargaría de esta manera.
        var template = _.template(this.templateHtml);
        this.$el.html(template({users: userList}));

        return this;
    }
});
