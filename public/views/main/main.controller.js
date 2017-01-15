(function () {
    "use strict";
    angular
        .module("PuttyFace")
        .controller("MainController", MainController);

    function MainController($scope, $location) {
        $scope.$location = $location;
    }
})();
