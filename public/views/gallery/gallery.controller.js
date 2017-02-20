(function () {
    "use strict";
    angular
        .module("PuttyFace")
        .controller("GalleryController", GalleryController);

    function GalleryController($location, ngCart) {
        var model = this;

        model.$location = $location;
    }
})();
