angular.module('app')
  .controller('MainController', function($scope, $timeout, $mdSidenav, $mdComponentRegistry, $log, SemestreService) {

    // start sidenav
    $scope.isOpen = function() { return $mdSidenav('right').isOpen(); };
    $scope.toggle = function() { $mdSidenav('right').toggle(); };

    $scope.toggle = angular.noop;
    $scope.isOpen = function() {
      return false;
    };

    $mdComponentRegistry
      .when('right')
      .then(function(sideNav) {

        $scope.isOpen = angular.bind(sideNav, sideNav.isOpen);
        $scope.toggle = angular.bind(sideNav, sideNav.toggle);

      });
    $scope.toggleRight = function() {
      $mdSidenav('right').toggle()
        .then(function() {
          $log.debug("toggle RIGHT is done");
        });
    };

    $scope.close = function() {
      $mdSidenav('right').close()
        .then(function() {
          $log.debug("close RIGHT is done");
        });
      };
    // end sidenav

    function loadSemestres() {
      SemestreService.getAll().then(function(res){
        $scope.listSemestres = res.data;
      });
    }
    loadSemestres();

});
