angular.module('taskApp',['routing','users','webService','home'])
.controller('taskAppCtrl',['$scope','$state',function($scope,$state){
    $scope.title=$state.current.data.title;
}])
    .run([ '$rootScope', '$state', '$stateParams',
        function ($rootScope, $state) {
            $rootScope.$state = $state;
        }])