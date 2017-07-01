angular.module('users')
    .controller('userDetailsCtrl',['$scope','getUserId','$stateParams',function($scope,getUserId,$stateParams){
      $scope.user=getUserId
       
    }])