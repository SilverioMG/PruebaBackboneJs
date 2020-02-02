var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'new': 'editUser'
    }
});

var router = new Router();
router.on('route:home', function(){
    console.log('Route to: "Home Page"');
    var view = new UserListView();
    //view.initialize(); //El método 'initialize()' se ejecuta automáticamente al crear el objeto de la 'Vista'.
    //view.render(); //Desde el método 'initialize()' de la Vista se llama al 'render()'.
});

router.on('route:editUser', function(){
    console.log('Route to: "New User"');
    var view = new EditUserView();
});

Backbone.history.start();