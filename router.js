var Router = Backbone.Router.extend({
    routes: {
        '': 'home'
    }
});

var router = new Router();
router.on('route:home', function(){
    console.log('You are in Home Page...');
    var view = new UserListView();
    //view.initialize(); //El método 'initialize()' se ejecuta automáticamente al crear el objeto de la 'Vista'.
    //view.render(); //Desde el método 'initialize()' de la Vista se llama al 'render()'.
});

Backbone.history.start();