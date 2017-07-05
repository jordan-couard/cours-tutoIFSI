angular.module('app')
    .service('SemestreService', function($http) {
        return {
          create: function(newSemestre) {
                return $http.post('/semestres/', newSemestre);
            },
            getAll: function() {
                return $http.get('/semestres');
            },
            // getOne: function(id) {
            //     return $http.get('/semestres/' + id);
            // },
            // update: function(id, semestres) {
            //     return $http.put('/semestres/' + id, semestres);
            // },
            // delete: function(id) {
            //     return $http.delete('/semestres/' + id);
            // }
        };
    });
