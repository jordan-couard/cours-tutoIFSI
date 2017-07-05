angular.module('app')
  .controller('SemestreController', function($scope, SemestreService) {

    $scope.semestres = [
      {
       id: 0,
       value: 1,
       name: "Semestre 1"
      },
      {
       id: 1,
       value: 2,
       name: "Semestre 2"
      },
      {
       id: 2,
       value: 3,
       name: "Semestre 3"
      },
      {
        id: 3,
        value: 4,
        name: "Semestre 4"
      },
      {
        id: 4,
        value: 5,
        name: "Semestre 5"
      },
    ];

    $scope.addSemestre = function(){
      SemestreService.create($scope.semestre).then(function(res){
        console.log($scope.semestre, res);
      });
      $scope.semestre = '';
      $scope.describe = '';
      // loadSemestres();
    };
  });
