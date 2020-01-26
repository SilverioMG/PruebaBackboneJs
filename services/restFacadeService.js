//Interceptor, se ejecuta antes de cada petición Http realizada con Ajax.
var urlBase = ""; //'http://backbonejs-beginner.herokuapp.com';
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
    //Se añade la 'url' base para cada llamada Http.
    options.url = this.urlBase + options.url;
});