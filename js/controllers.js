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

        $scope.deleteTeam = function(id){
            var res = confirm("Are you sure?")
            if (res == true){
                $http({
                    method: 'DELETE',
                    url: $scope.endpoint + 'Teams/DeleteTeam/'+id,

                }).then(function successCallback(response) {
                    $state.go('HomeManager.TeamM',{}, {reload: true});
                }, function errorCallback(response) {
                    $state.go('HomeManager.TeamM',{}, {reload: true});
                });
            }
        };
    })

    .controller('ProjectMCtrl', function($scope, $http, localStorageService,$state,$window,$rootScope) {
        $scope.date = '20140313T00:00:00';
        $scope.id=localStorageService.get("id_user");
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
                url: $scope.endpoint + 'Projects/addProject/'+$scope.id,
                headers: {'Content-Type': 'application/json'},
                data: $scope.project
            }).then(function successCallback(response) {
                $window.alert("The Project was created successfully");
                $state.go('HomeManager.ProjectM',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check project details!");
            });
        };

        $scope.editProject = function(project){

            $state.go('EditProject',{}, {reload: true});
            $http({
                method: 'GET',
                url: $scope.endpoint + 'Projects/findProject/'+project.id_project
            }).then(function successCallback(response) {
                $rootscope.project = response.data;
            }, function errorCallback(response) {

            });
        };
        $scope.deleteProject = function(id){
        var res = confirm("Are you sure?")
            if (res == true){
                $http({
                    method: 'DELETE',
                    url: $scope.endpoint + 'Projects/DeleteProject/'+id,

                }).then(function successCallback(response) {
                    $state.go('HomeManager.ProjectM',{}, {reload: true});
                }, function errorCallback(response) {
                    $state.go('HomeManager.ProjectM',{}, {reload: true});
                });
            }

        };
        $scope.updateProject = function(){
            $scope.projet=$rootscope.project;

            $http({
                method: 'PUT',
                url: $scope.endpoint + 'Projects',
                headers: {'Content-Type': 'application/json'},
                data: $scope.project
            }).then(function successCallback(response) {
                $state.go('HomeManager.ProjectM',{}, {reload: true});
            }, function errorCallback(response) {
                $state.go('HomeManager.ProjectM',{}, {reload: true});
            });

        };
    })

    .controller('PartitionMCtrl', function($scope, $http, localStorageService,$state,$window) {
        $scope.id=localStorageService.get("id_user");

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Partitions'
        }).then(function successCallback(response) {
            $scope.Partitions = response.data;
        }, function errorCallback(response) {

        });
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Partitions/findPartitionsByManager/'+$scope.id
        }).then(function successCallback(response) {
            $scope.Partitions = response.data;
        }, function errorCallback(response) {

        });

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
            $scope.projects = response.data;
        }, function errorCallback(response) {

        });

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Studies/findStudiesByManager/'+$scope.id
        }).then(function successCallback(response) {
            $scope.projets = response.data;
        }, function errorCallback(response) {

        });

         $scope.addPartition = function(partition){
             $scope.partition = partition;
             $http({
                 method: 'POST',
                 url: $scope.endpoint + 'Partitions',
                 headers: {'Content-Type': 'application/json'},
                 data: $scope.partition
             }).then(function successCallback(response) {
                 $state.go('HomeManager.PartitionM',{}, {reload: true});
             }, function errorCallback(response) {
                 $window.alert("Please check project details!");
             });
        };
        $scope.deletePartition= function(id){
            var res = confirm("Are you sure?")
            if (res == true){
                $http({
                    method: 'DELETE',
                    url: $scope.endpoint + 'Partitions/DeletePartition/'+id,

                }).then(function successCallback(response) {
                    $state.go('HomeManager.PartitionM',{}, {reload: true});
                }, function errorCallback(response) {
                    $state.go('HomeManager.PartitionM',{}, {reload: true});
                });
            }

        };
        $scope.detailPartition=function (id,name) {
            localStorageService.set("namePart",name);
            localStorageService.set("idPart",id);

            $state.go('HomeManager.PartitionManag',{}, {reload: true});
        }
    })
    .controller('NewVariableCtrl', function($scope, $http, localStorageService,$state,$window) {
        $scope.name=localStorageService.get("namePart");
        $scope.idPart=localStorageService.get("idPart");

        $scope.addVariable = function(variable) {
            $scope.variable = variable;
            $http({
                method: 'POST',
                url: $scope.endpoint + 'Variables',
                headers: {'Content-Type': 'application/json'},
                data: $scope.variable
            }).then(function successCallback(response) {
                $http({
                    method: 'GET',
                    url: $scope.endpoint + "Variables/findLastRow",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function successCallback(responsedata) {
                    $http({
                        method: 'POST',
                        url: $scope.endpoint + 'Variables/addPartition/'+$scope.idPart+'/'+ responsedata.data.id_variable +'/1',
                        headers: {'Content-Type': 'application/json'}
                    }).then(function successCallback(responsedataa) {

                    }, function errorCallback(responsedataa) {
                    });

                }, function errorCallback(responsedata) {

                });
                $state.go('HomeManager.PartitionManag',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check variable details!");
            });
        };
        $scope.addConstraint = function(variable) {
            $scope.variable = variable;
            $http({
                method: 'POST',
                url: $scope.endpoint + 'Constraints',
                headers: {'Content-Type': 'application/json'},
                data: $scope.variable
            }).then(function successCallback(response) {
                $http({
                    method: 'GET',
                    url: $scope.endpoint + "Variables/findLastRow",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function successCallback(responsedata) {
                    $http({
                        method: 'POST',
                        url: $scope.endpoint + 'Variables/addPartition/'+$scope.idPart+'/'+ responsedata.data.id_variable +'/1',
                        headers: {'Content-Type': 'application/json'}
                    }).then(function successCallback(responsedataa) {

                    }, function errorCallback(responsedataa) {
                    });

                }, function errorCallback(responsedata) {

                });
                $state.go('HomeManager.PartitionManag',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check constraint details!");
            });
        };
        $scope.addObjective = function(variable) {
            $scope.variable = variable;
            $http({
                method: 'POST',
                url: $scope.endpoint + 'Objectives',
                headers: {'Content-Type': 'application/json'},
                data: $scope.variable
            }).then(function successCallback(response) {
                $http({
                    method: 'GET',
                    url: $scope.endpoint + "Variables/findLastRow",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function successCallback(responsedata) {
                    $http({
                        method: 'POST',
                        url: $scope.endpoint + 'Variables/addPartition/'+$scope.idPart+'/'+ responsedata.data.id_variable +'/1',
                        headers: {'Content-Type': 'application/json'}
                    }).then(function successCallback(responsedataa) {

                    }, function errorCallback(responsedataa) {
                    });

                }, function errorCallback(responsedata) {

                });
                $state.go('HomeManager.PartitionManag',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check objective details!");
            });
        };


    })
    .controller('PartitionManagCtrl', function($scope, $http, localStorageService,$window,$state) {
        $scope.name=localStorageService.get("namePart");
        $scope.idPart=localStorageService.get("idPart");
        $scope.Sets =[];
        $scope.intervals=[];


            $http({
                       method: 'GET',
                       url: $scope.endpoint + 'Variables/findVariablesByPartition/'+$scope.idPart
                   }).then(function successCallback(response) {
                      console.log(response);
                       $scope.variables = response.data;
                $scope.variables = response.data;

                       }, function errorCallback(responsedata) {

            });
        $scope.displaySets = function(id){
            $http({
                method: 'GET',
                url: $scope.endpoint + 'Variables/displayVariableWithSets/'+id
            }).then(function successCallback(response) {
                $scope.sets = response.data;
                for (var i = 0; i <= response.data.length; i++) {
                    // alert(response.data[i].id_variable)
                    var id = response.data[i].id_set;
                    if ($scope.sets[i].value == null) {
                        $http({
                            method: 'GET',
                            url: $scope.endpoint + 'Sets/findIntervalsBySet/' + id
                        }).then(function successCallback(response) {
                            $scope.intervals = response.data;
                        }, function errorCallback(response) {

                        })

                    }
                }
            }, function errorCallback(response) {

            })

        };

        // $scope.part =[];
        // $scope.Sets =[];
        // $scope.intervals=[];
        //    $http({
        //        method: 'GET',
        //        url: $scope.endpoint + 'Variables'
        //    }).then(function successCallback(response) {
        //       console.log(response);
        //        $scope.variables = response.data;
        //        for (var i = 0; i <= response.data.length; i++)  {
        //            // alert(response.data[i].id_variable)
        //            var id = response.data[i].id_variable;
        //            $http({
        //                method: 'GET',
        //                url: $scope.endpoint + 'Partitions/findPartitionsByVariable/'+ id
        //            }).then(function successCallback(responsedata) {
        //
        //                    $scope.part.push(responsedata.data);
        //                    console.log($scope.part)
        //                    //$scope.partitions = responsedata.data;
        //
        //
        //            }, function errorCallback(responsedata) {
        //
        //            });
        //
        //            $http({
        //                method: 'GET',
        //                url: $scope.endpoint + 'Variables/displayVariableWithSets/'+ id
        //            }).then(function successCallback(responsedataa) {
        //                $scope.Sets.push( responsedataa.data);
        //
        //
        //                    }, function errorCallback(responsedataa) {
        //
        //            });
        //            $http({
        //                method: 'GET',
        //                url: $scope.endpoint + 'Variables/findVariableWithIntervals/'+ id
        //            }).then(function successCallback(responsedata2) {
        //                $scope.intervals.push( responsedata2.data);
        //
        //            }, function errorCallback(responsedata) {
        //
        //            });
        //        }
        // }), function errorCallback(response) {
        //
        //    };
        $scope.deleteVariable = function(id){
            var res = confirm("Are you sure?")
            if (res == true){
                $http({
                    method: 'DELETE',
                    url: $scope.endpoint + 'Variables/DeleteVariable/'+id,

                }).then(function successCallback(response) {
                    $state.go('HomeManager.PartitionManag',{}, {reload: true});
                }, function errorCallback(response) {
                    $state.go('HomeManager.PartitionManag',{}, {reload: true});
                });
            }

        };
        $scope.NewVariable = function(){
            $state.go('NewVariable',{}, {reload: true});
        };


    })



    .controller('StudieMCtrl', function($scope, $http, localStorageService,$state) {
        $scope.id=localStorageService.get("id_user");
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Studies'
        }).then(function successCallback(response) {
            $scope.studies = response.data;
        }, function errorCallback(response) {

        });

        $scope.addStudy = function(study){
            $scope.study = study;
            $http({
                method: 'POST',
                url: $scope.endpoint + 'Studies',
                headers: {'Content-Type': 'application/json'},
                data: $scope.study
            }).then(function successCallback(response) {
                $state.go('HomeManager.ListStudieM',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check Study details!");
            });
        };


        $scope.addStudies = function(study,p){
            $scope.study = study;
            $scope.id = p.id_project;
            $http({
                method: 'POST',
                url: $scope.endpoint + 'Studies/addStudies/'+$scope.id,
                headers: {'Content-Type': 'application/json'},
                data: $scope.study
            }).then(function successCallback(response) {
                $state.go('HomeManager.ListStudieM',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check Study details!");
            });
        };

        $scope.duplicate = function(id){

            $http({
                method: 'POST',
                url: $scope.endpoint + 'Studies/duplicateStudy/'+id,
                headers: {'Content-Type': 'application/json'},

            }).then(function successCallback(response) {
                $state.go('HomeManager.ListStudieM',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check project details!");
            });
        };


        $http({
            method: 'GET',
            url: $scope.endpoint + 'Projects'
        }).then(function successCallback(response) {
            $scope.projects = response.data;
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
    .controller('PartitionCCtrl', function($scope, $http, localStorageService,$state) {

        $scope.id=localStorageService.get("id_user");

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Studies/findStudiesByCoordinator/'+$scope.id
        }).then(function successCallback(response) {
            $scope.studies = response.data;
        }, function errorCallback(response) {

        });
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Partitions/findPartitionsByCoordinator/'+$scope.id
        }).then(function successCallback(response) {
            $scope.partition = response.data;
        }, function errorCallback(response) {

        });
        $scope.detailPartition=function (id,name) {
            localStorageService.set("namePart",name);
            localStorageService.set("idPart",id);

            $state.go('HomeCoordinator.PartitionCManag',{}, {reload: true});
        }
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
    .controller('DisplayvariablesCtrl', function($scope, $http, localStorageService,$state,$rootScope) {

        $scope.id=localStorageService.get("id_user");


            $http({
                method: 'GET',
                url: $scope.endpoint + 'Variables/findSharedVariableByCoodinator/' +$scope.id
            }).then(function successCallback(response) {
                $scope.variable = response.data;
            }, function errorCallback(response) {

            });
    })


    .controller('DisplaycontraintsCtrl', function($scope, $http, localStorageService,$state,$rootScope) {

        $scope.id=localStorageService.get("id_user");

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Constraints/findConstraintsByCoordinator/'+ $scope.id
        }).then(function successCallback(response) {
            $scope.variable = response.data;
        }, function errorCallback(response) {

        });

    })

    .controller('DisplayobjectivesCtrl', function($scope, $http, localStorageService,$state,$rootScope) {

        $scope.id=localStorageService.get("id_user");


        $http({
            method: 'GET',
            url: $scope.endpoint + 'Objectives/findObjectivesByCoordinator/' + $scope.id
        }).then(function successCallback(response) {
            $scope.variable = response.data;
        }, function errorCallback(response) {

        });
    })


    .controller('PartitionManagCCtrl', function($scope, $http, localStorageService,$state,$rootScope) {

        $scope.id=localStorageService.get("id_user");
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Variables/findSharedVariables'
        }).then(function successCallback(response) {
            $scope.variable = response.data;
        }, function errorCallback(response) {

        });
 $scope.displayVariables=function(){
     $state.go('VariablesC',{}, {reload: true});
     $http({
         method: 'GET',
         url: $scope.endpoint + 'Variables/findVariablesByCoordinator/'+ $scope.id
     }).then(function successCallback(response) {
         $scope.variable = response.data;
     }, function errorCallback(response) {

     });

 };
        $scope.displayMinMax = function(id){
            $http({
                method: 'GET',
                url: $scope.endpoint + 'Partitions/findVariablesPartitionsByIdVable/'+id
            }).then(function successCallback(response) {
                $scope.sets = response.data;

            }, function errorCallback(response) {

            })

        };
        $scope.updateMinMax = function(variables) {
            $state.go('updateVariableC',{}, {reload: true});
            $rootScope.vable =variables;
        };
    })
    .controller('updateVariableC', function($scope, $http, localStorageService,$state) {

        $scope.id=localStorageService.get("id_user");


        $scope.displaySets = function(id){
            $http({
                method: 'GET',
                url: $scope.endpoint + 'Variables/findSetsByVariable/'+id
            }).then(function successCallback(response) {
                $scope.sets = response.data;

            }, function errorCallback(response) {

            })
            $http({
                method: 'GET',
                url: $scope.endpoint + 'Variables/findVariableWithIntervals/'+ id
             }).then(function successCallback(responsedata2) {
                  $scope.intervals( responsedata2.data);

            }, function errorCallback(responsedata) {

             });

        };
        $scope.updateMinMax = function(variables) {
            $state.go('updateVariableC',{}, {reload: true});
            $rootScope.vable =variables;
        };
        $scope.updateVariable = function(variable){
            $scope.variable=variable;

            $http({
                method: 'PUT',
                url: $scope.endpoint + 'Variables',
                headers: {'Content-Type': 'application/json'},
                data: $scope.variable
            }).then(function successCallback(response) {
                $state.go('HomeCoordinator.PartitionCManag',{}, {reload: true});
            }, function errorCallback(response) {
                $state.go('HomeCoordinator.PartitionCManag',{}, {reload: true});
            });

        };
    })

    //************************** Engineer Controllers ****************************//

    .controller('PartitionECtrl', function($scope, $http, localStorageService) {
        $scope.id=localStorageService.get("id_user");
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Studies/findStudiesByEngineer/'+$scope.id
        }).then(function successCallback(response) {
            $scope.studies = response.data;
        }, function errorCallback(response) {

        });
    })
    .controller('DashboardECtrl', function($scope, $http, localStorageService) {

        $scope.id=localStorageService.get("id_user");
        // $http({
        //     method: 'GET',
        //     url: $scope.endpoint + 'Studies/findStudyByEngineer/'+$scope.id
        // }).then(function successCallback(response) {
        //     $scope.dash = response.data;
        //     $http({
        //         method: 'GET',
        //         url: $scope.endpoint + 'Coordinators/findCoordinatorByTeam/'+$scope.dash.team.id_team
        //     }).then(function successCallback(response) {
        //         $scope.coordinator = response.data;
        //         $http({
        //             method: 'GET',
        //             url: $scope.endpoint + 'Engineers/findEnginnersByNameTeam/'+$scope.dash.team.name
        //         }).then(function successCallback(response) {
        //             $scope.engineers = response.data;
        //         }, function errorCallback(response) {
        //
        //         });
        //     }, function errorCallback(response) {
        //
        //     });
        //
        // }, function errorCallback(response) {
        //
        // });

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Partitions/findPartitionByEngineer/'+$scope.id
        }).then(function successCallback(response) {
            $scope.part = response.data;
            localStorageService.set("IdPart",$scope.part.id_partition);
            $http({
                method: 'GET',
                url: $scope.endpoint + 'Coordinators/findCoordinatorByTeam/'+$scope.part.study.team.id_team
                }).then(function successCallback(response) {
                $scope.coordinator = response.data;
            }, function errorCallback(response) {
            });
        }, function errorCallback(response) {

        });


    })


.controller('PartitionEManagCtrl', function($scope, $http, localStorageService,$window,$state,$rootScope){
    $scope.id=localStorageService.get("id_user");
    $scope.idPart=localStorageService.get("IdPart");

    $http({
        method: 'GET',
         //url: $scope.endpoint + 'Variables/findVariablesByEngineer/'+$scope.idPart
         url: $scope.endpoint + 'Variables/findVariablesByPartition/3'
        //url: $scope.endpoint + 'Variables/findVariablesByPartition/2'
    }).then(function successCallback(response) {
        $scope.variables = response.data;
        $rootScope.taille = response.data.length;

    }, function errorCallback(response) {

    });
    $scope.update = function(variables) {
        $state.go('updateVariableE',{}, {reload: true});
        $rootScope.vable =variables;
    };

    $scope.displaySets = function(id){
        $http({
            method: 'GET',
            url: $scope.endpoint + 'Variables/displayVariableWithSets/'+id
        }).then(function successCallback(response) {
            $scope.sets = response.data;
            for (var i = 0; i <= response.data.length; i++) {
                // alert(response.data[i].id_variable)
                var id = response.data[i].id_set;
                if ($scope.sets[i].value == null) {
                    $http({
                        method: 'GET',
                        url: $scope.endpoint + 'Sets/findIntervalsBySet/' + id
                    }).then(function successCallback(response) {
                        $scope.intervals = response.data;
                    }, function errorCallback(response) {

                    })

                }
            }
        }, function errorCallback(response) {

        })

    };

})
    .controller('SendCtrl', function($scope, $http, localStorageService,$window,$state,$rootScope){
        $scope.id=localStorageService.get("id_user");
        $scope.idPart=localStorageService.get("IdPart");

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Sets/getLatestRowSet/'+$scope.taille
        }).then(function successCallback(responsedata) {
            $scope.setss = responsedata.data;
        }, function errorCallback(responsedata) {

        });



        $scope.showSets = function(){

            $http({
                method: 'GET',
                url: $scope.endpoint + 'Sets/getLatestRowSet/'+$scope.taille
            }).then(function successCallback(responsedata) {
                $scope.setss = responsedata.data;
            }, function errorCallback(responsedata) {

            });
        }




        $scope.addSet = function(set,id) {
            $scope.idPart=localStorageService.get("IdPart");
            $scope.id_user=localStorageService.get("id_user");
            $scope.id=id;
            $scope.value = set;

            $http({
                method: 'POST',
                url: $scope.endpoint + 'Sets/addSet',
                headers: {'Content-Type': 'application/json'},
                data: $scope.value
            }).then(function successCallback(response) {
                $http({
                    method: 'GET',
                    url: $scope.endpoint + "Sets/findLastSet",
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function successCallback(responsedata) {
                    $http({
                        method: 'POST',
                        url: $scope.endpoint + 'Variables/addPartition/'+$scope.idPart+'/'+ $scope.id +'/'+ responsedata.data.id_set,
                        headers: {'Content-Type': 'application/json'}
                    }).then(function successCallback(responsedataa) {

                    }, function errorCallback(responsedataa) {
                        $window.alert("Please check your details!");
                    });

                }, function errorCallback(responsedata) {

                });
                $state.go('updateVariableE',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check set details!");
            });
        }
        $scope.addInterval = function(interval) {
            $scope.interval = interval;
            $http({
                method: 'POST',
                url: $scope.endpoint + 'Sets/addInterval',
                headers: {'Content-Type': 'application/json'},
                data: $scope.interval
            }).then(function successCallback(response) {
                $state.go('updateVariableE',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check interval details!");
            });
        }
        $scope.updateVariable = function(variable, min,max) {
            $scope.idPart=localStorageService.get("IdPart");
            $scope.variable = variable;
            $scope.min = min;
            $scope.max = max;
            $http({
                method: 'GET',
                url: $scope.endpoint + "Sets/findLastSet",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function successCallback(responsedata) {
                $http({
                    method: 'PUT',
                    url: $scope.endpoint + 'Partitions/updateVariable/'+$scope.idPart+'/'+ $scope.variable.id_variable +'/'+ responsedata.data.id_set+'/'+$scope.min +'/'+$scope.max,
                    headers: {'Content-Type': 'application/json'},
                    data: $scope.interval
                }).then(function successCallback(response) {
                    $state.go('updateVariableE',{}, {reload: true});
                }, function errorCallback(response) {

                });
            }, function errorCallback(responsedata) {
                $window.alert("Please check your details!");
            });

        }
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



    .controller('ProfileCtrl', function($scope, $http, localStorageService, $state, $window) {
        $scope.first_name=localStorageService.get("first_name");
        $scope.last_name=localStorageService.get("last_name");
        $http({
            method: 'GET',
            url: $scope.endpoint + "Users/findByName/"+ $scope.first_name+"/"+$scope.last_name,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function successCallback(response) {

            $scope.user = response.data;
        }, function errorCallback(response) {
        });

            $scope.date = new Date();

            })


    .controller('AddTeamMCtrl', function($scope, $http, localStorageService,$state) {
        $scope.id=localStorageService.get("id_user");

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Coordinators'
        }).then(function successCallback(response) {
            $scope.coordinators = response.data;
        }, function errorCallback(response) {

        });

        $scope.addTeam = function(team,c){
            $scope.team = team;
            $scope.coordinator=c;
            $http({
                method: 'POST',
                url: $scope.endpoint + 'Teams/addTeamWithCoord',
                headers: {'Content-Type': 'application/json'},
                data: $scope.team
            }).then(function successCallback(response) {
                $state.go('HomeManager.TeamM',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check team details!");
            });
        };

    })

    .controller('AddDomainMCtrl', function($scope, $http, localStorageService,$state) {
        $scope.id=localStorageService.get("id_user");

        $scope.addDomain = function(domain){
            $scope.domain = domain;
            $http({
                method: 'POST',
                url: $scope.endpoint + 'Domains',
                headers: {'Content-Type': 'application/json'},
                data: $scope.domain
            }).then(function successCallback(response) {
                $state.go('HomeManager.DomainM',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check team details!");
            });
        };
    })


    .controller('AddEngineerMCtrl', function($scope, $http, localStorageService,$state) {
        $scope.id=localStorageService.get("id_user");

        $scope.addEngineer = function(engineer){
            $scope.engineer = engineer;
            $http({
                method: 'POST',
                url: $scope.endpoint + 'Engineers',
                headers: {'Content-Type': 'application/json'},
                data: $scope.engineer
            }).then(function successCallback(response) {
               $state.go('HomeManager.EngineerM',{}, {reload: true});
            }, function errorCallback(response) {
               $window.alert("Please check engineer details!");
            });
        };

        $scope.addEngineerToTeam = function(team,engineer){
            $scope.engineer = engineer;
            $scope.team = team;

            $http({
                method: 'POST',
                url: $scope.endpoint + 'Engineers',
                headers: {'Content-Type': 'application/json'},
                data: $scope.engineer
            })      .then(function successCallback(response) {
                $state.go('HomeManager.EngineerM',{}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check engineer details!");
            });
        };

        $scope.runBoth = function (engineer,team) {
            addEngineer(engineer);
            addEngineerToTeam(engineer,team);
        };

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Teams'
        }).then(function successCallback(response) {
            $scope.teams = response.data;
        }, function errorCallback(response) {
        });

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Domains'
        }).then(function successCallback(response) {
            $scope.domains = response.data;
        }, function errorCallback(response) {

        });

    })


    .controller('AddCoordinatorMCtrl', function($scope, $http, localStorageService,$state) {
        $scope.id = localStorageService.get("id_user");

        $scope.addCoordinator = function (coordinator) {
            $scope.coordinator = coordinator;
            $http({
                method: 'POST',
                url: $scope.endpoint + 'Coordinators',
                headers: {'Content-Type': 'application/json'},
                data: $scope.coordinator
            }).then(function successCallback(response) {
                $state.go('HomeManager.CoordinatorM', {}, {reload: true});
            }, function errorCallback(response) {
                $window.alert("Please check coordinator details!");
            });
        };

        $http({
            method: 'GET',
            url: $scope.endpoint + 'Teams'
        }).then(function successCallback(response) {
            $scope.teams = response.data;
        }, function errorCallback(response) {
        });

    })