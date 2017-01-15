(function () {
    "use strict";
    angular
        .module("PuttyFace")
        .config(configure);

    function configure($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home/home.view.html",
                controller: "HomeController"
            })
            .when("/gallery", {
                templateUrl: "views/gallery/gallery.view.html",
                controller: "GalleryController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();
