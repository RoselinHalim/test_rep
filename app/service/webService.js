angular.module('webService', []).
    constant('webServiceConfig', {
        'serviceBaseUrl': 'https://api.github.com/',
        'usersUrl': 'users',
        'userByIdUrl': 'users/{0}',
    }).
    factory('usersService', function ($http, $q,webServiceConfig) {
        var AllUsers = null;
        var getAllUsers = function () {
            var deferred = $q.defer();
          var url=webServiceConfig.serviceBaseUrl+webServiceConfig.usersUrl;
            $http.get(url).then(function (data) {
                AllUsers = data.data;
                deferred.resolve(data)
            }, function (err) {
                deferred.reject(err)
            });
            return deferred.promise;
        }
        var getUsrById = function (id) {
            var deferred = $q.defer();
            var url=webServiceConfig.serviceBaseUrl+webServiceConfig.userByIdUrl.replace('{0}',id)
            $http.get(url).then(function (data) {
                AllUsers = data.data;
                deferred.resolve(data)
            }, function (err) {
                deferred.reject(err)
            });
            return deferred.promise;

        }
        return {
            getAllUsers: getAllUsers,
            getUsrById: getUsrById,
        }
    });