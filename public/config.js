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
            .when("/cart", {
                templateUrl: "views/cart/cart.view.html",
                controller: "CartController"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();
