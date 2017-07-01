angular.module('home',[])
    .controller('homeListCtrl',['$scope',function($scope){

        $scope.data={
            title1:"GitHub is a web-based Git repository hosting service. It offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features. Unlike Git, which is strictly a command-line tool, GitHub provides a Web-based graphical interface and desktop as well as mobile integration. It also provides access control and several collaboration",
            title2:"GitHub offers both plans for private repositories and free accounts,[4] which are usually used to host open-source software projects.[5] As of April 2016, GitHub reports having more than 14 million users and more than 35 million repositories,[6] making it the largest host of source code in the world ",
            title3:"GitHub's Terms of Service do not require public software projects hosted on GitHub to meet the Open Source Definition. For that reason, it is advisable for users and developers intending to use a piece of software found on GitHub to read the software license in the repository (usually found in a top-level similar) to determine",
        }

    }])