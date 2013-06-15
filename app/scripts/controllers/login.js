'use strict';

angular.module('standhubApp')
  .controller('LoginCtrl', ['$scope', function ($scope) {

    $scope.facebookLogin = function() {
      $scope.authClient.login('facebook', {rememberMe:true});
    };
    $scope.addSkills = function(skills) {
      // $scope.
    };
    $scope.emailLogin = function(email, password) {
      authClient.login('password', {
        email: email,
        password: password,
        rememberMe:true
      });
    };
    $scope.emailCreate = function(email,password) {
      $scope.authClient.createUser(email, password, function(error, user) {
        if (!error) {
          console.log('User Id: ' + user.id + ', Email: ' + user.email);
        }
      });
    };
    $scope.logout = function() {
      $scope.authClient.logout();
    };

  }]);
