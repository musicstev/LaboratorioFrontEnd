'use strict';

/**
 * @ngdoc function
 * @name labfrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the labfrontApp
 */
angular.module('labfrontApp')
    .controller('MainCtrl', function($scope) {
        $scope.showMe = false;
        $scope.showWa = false;
        $scope.mensaje = '';
        var ambosError = false;
        $scope.usuario = '';
        $scope.password ='';
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.login = function() {
            if ($scope.usuario.length == 0) {

                $scope.mensaje = "Por favor ingrese usuario";
                ambosError = true;
            }

            if ($scope.password.length === 0) {
                $scope.mensaje = $scope.mensaje + " y contraseña";
                ambosError = true;
            }

            if (ambosError) {

                $scope.showWa = !$scope.showWa;
            }else{
            	 $scope.showMe = !$scope.showMe;
            }
          
            console.log('Loggin');
            ambosError=false;
            
        }

    });
