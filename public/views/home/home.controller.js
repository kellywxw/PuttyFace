(function () {
    "use strict";
    angular
        .module("PuttyFace")
        .controller("HomeController", HomeController);

    function HomeController($location) {
        var model = this;

        model.$location = $location;
    }
})();
