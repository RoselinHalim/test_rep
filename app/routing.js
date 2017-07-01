angular.module('routing',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/pages/home/home.html',
                controller:'homeListCtrl',
                data: {
                    title: 'Home'
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/pages/about/about.html',
                data: {
                    title: 'About'
                }
            })
            .state('users', {
                url: '/users',

                        templateUrl: 'app/pages/users/usersList/usersList.html',
                        controller:'usersListCtrl',
                data: {
                    title: 'Users'
                },
       resolve: {
        getUsers: function(usersService){
            return usersService.getAllUsers().then(
                function(respond){
                    return respond.data
                    
                },
                function(error){
                 return   alert("Service Error..Check Again")
                }
            );
        }
       }
            })
            .state('users.details', {
                url: '/:id',
                    templateUrl: 'app/pages/users/userDetails/userDetails.html',
                    controller:'userDetailsCtrl',
                data: {
                    title: 'Users Details'
                },resolve: {
        getUserId: function(usersService,$stateParams){
            return usersService.getUsrById($stateParams.id).then(
                function(respond){
                    return respond.data
                    
                },
                function(error){
                 return   alert("Service Error..Check Again")
                }
            );
        }
       }


            })

    })
