(function () {
    "use strict";
    angular
        .module("PuttyFace")
        .controller("GalleryController", GalleryController);

    function GalleryController($location, ngCart) {
        var model = this;

        model.$location = $location;

        ngCart.setTaxRate(0);
        ngCart.setShipping(0);
        console.log (ngCart);

        model.checkout = function() {
            model.summary = ngCart.toObject();;
        }


    }
})();
