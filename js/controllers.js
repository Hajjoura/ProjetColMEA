angular.module('ColMEA.controllers', [])

    .controller('MenuCtrl', function($scope, localStorageService) {

    })

    //************************** Home Controllers ****************************//

    .controller('HomeMCtrl', function($scope, $http, localStorageService) {

        console.log(localStorageService.get("first_name"));

        $scope.name=localStorageService.get("first_name");
        $scope.id=localStorageService.get("id_user");
    })
    .controller('HomeCCtrl', function($scope, $http, localStorageService) {

        console.log(localStorageService.get("first_name"));

        $scope.name=localStorageService.get("first_name");
        $scope.id =localStorageService.get("id_user");
    })
    .controller('HomeECtrl', function($scope, $http, localStorageService) {

        console.log(localStorageService.get("first_name"));
        $scope.id=localStorageService.get("id_user");
        $scope.name=localStorageService.get("first_name");
    })


    //************************** Manager Controllers ****************************//

    .controller('CoordinatorMCtrl', function($scope, $http, localStorageService) {

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Coordinators'
        }).then(function successCallback(response) {
            $scope.coordinators = response.data;
        }, function errorCallback(response) {

        });
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
        $scope.addProject = function(project){
            $scope.project = project;
            $http({
                method: 'POST',
                url: $scope.endpoint + 'Projects',
                headers: {'Content-Type': 'application/json'},
                data: $scope.project
            }).then(function successCallback(response) {
                $state.go('HomeManager.ProjectM');
            }, function errorCallback(response) {
                $state.go('HomeManager.ProjectM');
            });
        };
    })
    .controller('PartitionMCtrl', function($scope, $http, localStorageService) {
        $scope.id=localStorageService.get("id_user");

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Studies/findStudiesByManager/'+$scope.id
        }).then(function successCallback(response) {
            $scope.Studies = response.data;
        }, function errorCallback(response) {

        });
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Projects'
        }).then(function successCallback(response) {
            $scope.projets = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('PartitionManagCtrl', function($scope, $http, localStorageService) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Variables'
        }).then(function successCallback(response) {
            $scope.variables = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('StudieMCtrl', function($scope, $http, localStorageService) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Studies'
        }).then(function successCallback(response) {
            $scope.studies = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('DashboardM', function($scope, $http, localStorageService) {
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Statistics/NbrProjects'
        }).then(function successCallback(response) {
            $scope.nbrPr = response.data;
        }, function errorCallback(response) {

        });

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Statistics/NbrPartitions'
        }).then(function successCallback(response) {
            $scope.nbrPart = response.data;
        }, function errorCallback(response) {

        });
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Statistics/NbrTeams'
        }).then(function successCallback(response) {
            $scope.nbrTeams = response.data;
        }, function errorCallback(response) {

        });
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Statistics/NbrEngineers'
        }).then(function successCallback(response) {
            $scope.nbrEng = response.data;
        }, function errorCallback(response) {

        });
    })

    //************************** Coordinator Controllers ****************************//
    .controller('ProjectCCtrl', function($scope, $http, localStorageService) {

        $scope.id=localStorageService.get("id_user");
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Studies/findStudiesByCoordinator/'+$scope.id
        }).then(function successCallback(response) {
            $scope.projects = response.data;
        }, function errorCallback(response) {

        });
    })

    .controller('StudieCCtrl', function($scope, $http, localStorageService) {

        $scope.id=localStorageService.get("id_user");
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Studies/findStudiesByCoordinator/'+$scope.id
        }).then(function successCallback(response) {
            $scope.studies = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('PartitionCCtrl', function($scope, $http, localStorageService) {

        $scope.id=localStorageService.get("id_user");
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Studies/findStudiesByCoordinator/'+$scope.id
        }).then(function successCallback(response) {
            $scope.studies = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('EngineerCCtrl', function($scope, $http, localStorageService) {

        $scope.id=localStorageService.get("id_user");
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Engineers/findEnginnersByCoordinator/'+$scope.id
        }).then(function successCallback(response) {
            $scope.engineers = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('TeamCCtrl', function($scope, $http, localStorageService) {

        $scope.id=localStorageService.get("id_user");
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Teams'
        }).then(function successCallback(response) {
            $scope.teams = response.data;
        }, function errorCallback(response) {

        });
    })

    //************************** Engineer Controllers ****************************//

    .controller('PartitionECtrl', function($scope, $http, localStorageService) {
        $scope.id=localStorageService.get("id_user");
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Studies/findStudyByEngineer/'+$scope.id
        }).then(function successCallback(response) {
            $scope.studies = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('DashboardECtrl', function($scope, $http, localStorageService) {

        $scope.id=localStorageService.get("id_user");
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Studies/findStudyByEngineer/'+$scope.id
        }).then(function successCallback(response) {
            $scope.dash = response.data;
            $http({
                method: 'GET',
                url: $scope.endpoint + 'Coordinators/findCoordinatorByTeam/'+$scope.dash.team.id_team
            }).then(function successCallback(response) {
                $scope.coordinator = response.data;
                $http({
                    method: 'GET',
                    url: $scope.endpoint + 'Engineers/findEnginnersByNameTeam/'+$scope.dash.team.name
                }).then(function successCallback(response) {
                    $scope.engineers = response.data;
                }, function errorCallback(response) {

                });
            }, function errorCallback(response) {

            });

        }, function errorCallback(response) {

        });

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Partitions/findPartitionByEngineer/'+$scope.id
        }).then(function successCallback(response) {
            $scope.part = response.data;
        }, function errorCallback(response) {

        });


    })
    //************************** Common Controllers ****************************//

    .controller('LoginCtrl', function ($scope,$http,$state, $window,localStorageService) {
        $scope.loginM = function () {
            $http({
                method: 'GET',
                url: $scope.endpoint + "Users/auth/"+$scope.username +"/"+$scope.password,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function successCallback(response) {
                $scope.user = response.data;
                localStorageService.set("id_user",response.data.id_user);
                localStorageService.set("first_name",response.data.first_name);
                localStorageService.set("last_name",response.data.last_name);
                localStorageService.set("email",response.data.email);
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
                localStorageService.set("id_user",response.data.id_user);
                localStorageService.set("first_name",response.data.first_name);
                localStorageService.set("last_name",response.data.last_name);
                localStorageService.set("email",response.data.email);
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
                localStorageService.set("id_user",response.data.id_user);
                localStorageService.set("first_name",response.data.first_name);
                localStorageService.set("last_name",response.data.last_name);
                localStorageService.set("email",response.data.email);
                $window.alert("Hello " + $scope.username);
                $state.go('HomeEngineer');

            }, function errorCallback(response) {
                $window.alert("Please enter your credentials!");
            });
        };

    })
    //pause
    .controller('LogoutCtrl', function($scope, $http, localStorageService, $window, $state) {
       localStorageService.clearAll();
        $state.go('login', {}, {reload: false});

        $window.location.reload();
    })


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


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