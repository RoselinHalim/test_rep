angular.module('users',[])
    .controller('usersListCtrl', ['$scope', 'getUsers','$state','$stateParams', function ($scope, getUsers,$state,$stateParams) {
        $scope.itemsPerPage = 10;
        $scope.currentPage = 0;
            $scope.users=getUsers;
             var login=getUsers[0].login
             $state.go('users.details',{ id:login})
            
            $scope.users = getUsers.slice($scope.currentPage * $scope.itemsPerPage, $scope.itemsPerPage);
            $scope.loadMore = function () {
                $scope.currentPage++;
                $scope.offset = $scope.currentPage * $scope.itemsPerPage;
                var newUsers = getUsers.slice($scope.currentPage * $scope.itemsPerPage, $scope.itemsPerPage + $scope.offset);
                $scope.users = $scope.users.concat(newUsers)
            };
            $scope.disabledButton=function(){
              return  $scope.currentPage ===(Math.ceil(getUsers.length/$scope.itemsPerPage)-1)
            }
    }])