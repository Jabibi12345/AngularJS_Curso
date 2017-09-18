angular.module("appMain",[]);
angular.module("appMain")
.controller("AppMainController",['$scope',function($scope){

    $scope.userName={
        name:'Javi',
        apellidos: 'AL'
    };
    $scope.curso='AngularJS';

    $scope.borrar = function(){
        $scope.userName.name = '';
        $scope.userName.apellidos = '';
    }
}]);