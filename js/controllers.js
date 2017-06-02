angular.module('ColMEA.controllers', [])

    .controller('MenuCtrl', function($scope, localStorageService) {

    })


    .controller('HomeMCtrl', function($scope, $http, localStorageService) {

        console.log(localStorageService.get("first_name"));

        $scope.name=localStorageService.get("email");
    })
    .controller('PartitionECtrl', function($scope, $http, localStorageService) {
        $scope.IsVisible = false;
        $scope.ShowHide = function () {
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible = $scope.IsVisible ? false : true;
        }
    })
    .controller('PartitionManagCtrl', function($scope, $http, localStorageService) {

    })
    .controller('CoordinatorMCtrl', function($scope, $http, localStorageService) {

    })
    .controller('EngineerMCtrl', function($scope, $http, localStorageService) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Engineers'
        }).then(function successCallback(response) {
            $scope.engineers = response.data;
        }, function errorCallback(response) {

        });
    })

    .controller('DomainMCtrl', function($scope, $http, localStorageService) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Domains'
        }).then(function successCallback(response) {
            $scope.domains = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('TeamMCtrl', function($scope, $http, localStorageService) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Teams'
        }).then(function successCallback(response) {
            $scope.teams = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('ProjectMCtrl', function($scope, $http, localStorageService) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Projects'
        }).then(function successCallback(response) {
            $scope.projects = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('PartitionMCtrl', function($scope, $http, localStorageService) {


    })
    .controller('UpdateresumeCtrl', function($scope, $http, localStorageService, $state, $window) {
        $scope.ed =[];
        $scope.ex = [];
        $http({
            method: 'GET',
            url: $scope.endpoint + 'users/profile?token='+$scope.token,
        }).then(function successCallback(response) {
            $scope.work = response.data.work;
            $scope.place = response.data.place;
            $scope.username = response.data.username;
            $scope.id = response.data._id;
            for(var i = 0; i<3; i++){
                if(response.data.education[i] == undefined){
                    $scope.ed[i] = {date_start: '', date_end: '', place: '', desciption: ''};
                }else{
                    $scope.ed[i] = response.data.education[i];
                }
                if(response.data.experience[i] == undefined){
                    $scope.ex[i] = {date_start: '', date_end: '', place: '', desciption: ''};
                }else{
                    $scope.ex[i] = response.data.experience[i];
                }
            }
        }, function errorCallback(response) {

        });

        $scope.updateresume = function(){
            $http({
                method: 'PUT',
                url: $scope.endpoint + 'users/updateresume?token='+$scope.token,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: 'id='+$scope.id+'&place='+$scope.place + '&work='+$scope.work+'&education='+JSON.stringify($scope.ed) +'&experience='+JSON.stringify($scope.ex)
            }).then(function successCallback(response) {
                // $state.go('login', {}, {reload: true});
            }, function errorCallback(response) {

            });

        };
    })
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


    .controller('SuitableOffersCtrl', function($scope, $http, localStorageService, $state, $window) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'users/profile?token='+$scope.token,
        }).then(function successCallback(response) {
            $http({
                method: 'GET',
                url: $scope.endpoint + 'offers/advancedsearch/'+response.data.work+'?token='+$scope.token
            }).then(function successCallback(response) {
                $scope.offers = response.data;
            }, function errorCallback(response) {

            });
        }, function errorCallback(response) {

        });


    })

    ///////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


    .controller('OffersByplaceCtrl', function($scope, $http, localStorageService, $state, $window) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'users/profile?token='+$scope.token,
        }).then(function successCallback(response) {
            $http({
                method: 'GET',
                url: $scope.endpoint + 'offers/advancedsearch/'+response.data.place+'?token='+$scope.token
            }).then(function successCallback(response) {
                $scope.offers = response.data;
            }, function errorCallback(response) {

            });
        }, function errorCallback(response) {

        });


    })

    ///////////////////
    .controller('ProfileCtrl', function($scope, $http, localStorageService, $state, $window) {
        $scope.ed =[];
        $scope.ex = [];
        $http({
            method: 'GET',
            url: $scope.endpoint + 'users/profile?token='+$scope.token,
        }).then(function successCallback(response) {
            $scope.work = response.data.work;
            $scope.place = response.data.place;
            $scope.username = response.data.username;
            $scope.id = response.data._id;
            for(var i = 0; i<3; i++){
                if(response.data.education[i] == undefined){
                    $scope.ed[i] = {date_start: '', date_end: '', place: '', desciption: ''};
                }else{
                    $scope.ed[i] = response.data.education[i];
                }
                if(response.data.experience[i] == undefined){
                    $scope.ex[i] = {date_start: '', date_end: '', place: '', desciption: ''};
                }else{
                    $scope.ex[i] = response.data.experience[i];
                }
            }
        }, function errorCallback(response) {

        });
    })
    ////////////////////

    //pause
    .controller('addoffersCtrl', function($scope, $http, localStorageService, $state, $window) {
        $scope.addoffers = function(){
            $http({
                method: 'POST',
                url: $scope.endpoint + 'barbechoffers/addoffers?token='+$scope.token,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: 'title=' + $scope.title + '&description='+$scope.description + '&company='+$scope.company + '&place='+$scope.place
            }).then(function successCallback(response) {
                $state.go('barbechoffers', {}, {reload: true});
                console.log(response.data);
            }, function errorCallback(response) {

            });
        };
    })
    .controller('LoginCtrl', function ($scope,$http,$state, $window,localStorageService) {
        $scope.loginM = function () {
            $http({
                method: 'GET',
                url: $scope.endpoint + "Users/auth/"+$scope.username +"/"+$scope.password,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function successCallback(response) {
                $scope.user = response.data;
                localStorageService.add("id_user",response.id_user);
                localStorageService.add("first_name",response.first_name);
                localStorageService.add("last_name",response.last_name);
                localStorageService.add("email",response.email);
                $window.alert("Hello " + $scope.username);
                $state.go('HomeManager');

            }, function errorCallback(response) {
                $window.alert("Please enter your credentials!");
            });
        };
        $scope.loginC = function () {
            $http({
                method: 'GET',
                url: $scope.endpoint + "Users/auth/"+$scope.username +"/"+$scope.password,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function successCallback(response) {
                $scope.user = response.data;

                $window.alert("Hello " + $scope.username);
                $state.go('HomeCoordinator');

            }, function errorCallback(response) {
                $window.alert("Please enter your credentials!");
            });
        };
        $scope.loginE = function () {
            $http({
                method: 'GET',
                url: $scope.endpoint + "Users/auth/"+$scope.username +"/"+$scope.password,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function successCallback(response) {
                $scope.user = response.data;
                $window.alert("Hello " + $scope.username);
                $state.go('HomeEngineer');

            }, function errorCallback(response) {
                $window.alert("Please enter your credentials!");
            });
        };

    })
    //pause
    .controller('LogoutCtrl', function($scope, $http, localStorageService, $window, $state) {

            $state.go('login', {}, {reload: false});

        $window.location.reload();
    })

    .controller('OffersCtrl', function($scope, $http) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'offers?token='+$scope.token
        }).then(function successCallback(response) {
            $scope.offers = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('barbechoffersCtrl', function($scope, $http) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'barbechoffers?token='+$scope.token
        }).then(function successCallback(response) {
            $scope.barbechoffers = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('UsersCtrl', function($scope, $http) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'users?token='+$scope.token
        }).then(function successCallback(response) {
            $scope.users = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('advancedsearchCtrl', function($scope, $http) {
        $scope.keywords = 'informatique';
        $scope.offers = [];
        $scope.search = function(){
            $http({
                method: 'GET',
                url: $scope.endpoint + 'offers/advancedsearch/'+$scope.keywords+'?token='+$scope.token
            }).then(function successCallback(response) {
                $scope.offers = response.data;
            }, function errorCallback(response) {

            });
        };
        $scope.search();
    })

;