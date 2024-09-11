document.addEventListener('DOMContentLoaded', function() {
    var feed = new Instafeed({
        userId: '8190244199',  // Reemplaza con tu ID de usuario
        limit: 6,
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
        resolution: 'standard_resolution'
    });
    feed.run();
});