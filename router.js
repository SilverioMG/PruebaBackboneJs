var Router = Backbone.Router.extend({
    routes: {
        '': 'home'
    }
});

var router = new Router();
router.on('route:home', function(){
    console.log('You are in Home Page...');
    var view = new UserListView();
    view.render();
});

Backbone.history.start();