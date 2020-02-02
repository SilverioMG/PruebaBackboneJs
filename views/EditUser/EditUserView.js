var EditUserView = Backbone.View.extend({
    el:'#page',
    templateUrl: "./views/EditUser/EditUserViewTemplate.html", //Url del archivo que contiene la plantilla de esta Vista. Se descarga del server en el método 'initialize()'.
    templateHtml: "", //Html de la plantilla cargada del server.


    initialize:function(){

        $.get(this.templateUrl, function(templateHtml){
            this.templateHtml = templateHtml;
            this.render();
        }.bind(this));
    },

    events: {
        'submit #formUser': 'saveUser'
    },

    render: function(){
        //this.$el.html('Estás en EditUser...');
        var template = _.template(this.templateHtml);
        this.$el.html(template());
    },

    saveUser: function(event){
        event.preventDefault(); //Es lo mismo que devolver 'false' para que el form no haga la petición Http POST por defecto.
        //Serialización de la info del Formulario a Json.
        var formArrayData = $("#formUser").serializeArray(); 
        var jsonFormData = JSON.stringify(formArrayData);

        //TODO... Modificar la clase 'UserCollection' para tener un array y añadir el nuevo usuario creado a la lista que se recupera en la Vista ListUsers.

        return false; //Para que después de hacer click en el submit del formulario, no haga automáticamente el POST por defecto que haría normalmente.
    }

});