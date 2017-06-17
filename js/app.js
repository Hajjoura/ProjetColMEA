angular.module('ColMEA', ['ui.router', 'ColMEA.controllers','LocalStorageModule', 'uiGmapgoogle-maps'])

.run(function($rootScope, localStorageService) {
    $rootScope.endpoint = "http://localhost:8080/ColMEA.Web/";
})

.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider


        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
        })

        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })

        .state('addUser', {
        url: '/addUser',
        templateUrl: 'Views/Manager/AddUser.html',
        controller: 'addUserCtrl'
    })
        .state('HomeManager', {
            url: '/HomeManager',
            templateUrl: 'Views/Manager/HomeManager.html',
            controller:'HomeMCtrl'


        })
        .state('HomeManager.DashboardM', {
            url: '/Dashboard',
            templateUrl: 'Views/Manager/Dashboard.html',
            controller: 'DashboardM'

        })
        .state('HomeManager.ProjectM', {
            url: '/ProjectM',
            templateUrl: 'Views/Manager/Project.html',
            controller: 'ProjectMCtrl'
        })

        .state('HomeManager.ListStudieM', {
            url: '/ListStudieM',
            templateUrl: 'Views/Manager/ListStudies.html',
            controller:'StudieMCtrl'
        })
        .state('HomeManager.TradeOff', {
            url: '/TradeOffM',
            templateUrl: 'Views/Manager/TradeOff.html'
        })

        .state('HomeManager.PartitionM', {
            url: '/PartitionM',
            templateUrl: 'Views/Manager/ListPartitions.html',
            controller: 'PartitionMCtrl'
        })
        .state('HomeManager.PartitionManag', {
            url: '/PartitionManag',
            templateUrl: 'Views/Manager/PartitionDetail.html',
            parent:'HomeManager',
            controller: 'PartitionManagCtrl'

        })
        .state('HomeManager.CoordinatorM', {
            url: '/CoordinatorM',
            templateUrl: 'Views/Manager/Coordinator.html',
            controller: 'CoordinatorMCtrl'
        })
        .state('HomeManager.EngineerM', {
            url: '/EngineerM',
            templateUrl: 'Views/Manager/Engineer.html',
            controller: 'EngineerMCtrl'
        })
        .state('HomeManager.TeamM', {
            url: '/TeamM',
            templateUrl: 'Views/Manager/Team.html',
            controller: 'TeamMCtrl'
        })
        .state('HomeManager.DomainM', {
            url: '/DomainM',
            templateUrl: 'Views/Manager/Domain.html',
            controller: 'DomainMCtrl'
        })
        .state('AddCoordinator', {
            url: '/AddCoordinator',
            templateUrl: 'Views/Manager/AddCoordinator.html',
            parent:'HomeManager',

        })
        .state('AddDomain', {
            url: '/AddDomain',
            templateUrl: 'Views/Manager/AddDomain.html',
            parent:'HomeManager'
        })
        .state('AddEngineer', {
            url: '/AddEngineer',
            templateUrl: 'Views/Manager/AddEngineer.html',
            parent:'HomeManager'
        })
        .state('AddTeam', {
            url: '/AddTeam',
            templateUrl: 'Views/Manager/AddTeam.html',
            parent:'HomeManager'
        })
        .state('AddUser', {
            url: '/AddCoordinator',
            templateUrl: 'Views/Manager/AddCoordinator.html',
            parent:'HomeManager'
        })
        .state('NewPartition', {
            url: '/NewPartition',
            templateUrl: 'Views/Manager/NewPartition.html',
            parent:'HomeManager'
        })
        .state('NewProject', {
            url: '/NewProject',
            templateUrl: 'Views/Manager/NewProject.html',
            parent:'HomeManager',
            controller:'ProjectMCtrl'
        })
        .state('EditProject', {
            url: '/EditProject',
            templateUrl: 'Views/Manager/EditProject.html',
            parent:'HomeManager'
        })
        .state('NewStudy', {
            url: '/NewStudy',
            templateUrl: 'Views/Manager/NewStudy.html',
            parent:'HomeManager'
        })
        .state('NewVariable', {
            url: '/NewVariable',
            templateUrl: 'Views/Manager/NewVariable.html',
            parent:'HomeManager'
        })

        .state('logout', {
            url: '/logout',
            controller: 'LogoutCtrl'
        })


        .state('HomeCoordinator', {
            url: '/HomeCoordinator',
            templateUrl: 'Views/Coordinator/HomeCoordinator.html',
        })
        .state('HomeCoordinator.DashboardC', {
            url: '/DashboardC',
            templateUrl: 'Views/Coordinator/Dashboard.html',
            controller: 'DashboardM'

        })
        .state('HomeCoordinator.ProjectC', {
            url: '/ProjectC',
            templateUrl: 'Views/Coordinator/Project.html',
            controller: 'ProjectCCtrl'
        })

        .state('HomeCoordinator.ListStudieC', {
            url: '/ListStudieC',
            templateUrl: 'Views/Coordinator/ListStudies.html',
            controller:'StudieCCtrl'
        })
        .state('HomeCoordinator.PartitionC', {
            url: '/PartitionC',
            templateUrl: 'Views/Coordinator/Partition.html',
            controller:'PartitionCCtrl'

        })
        .state('HomeCoordinator.PartitionCManag', {
            url: '/PartitionCManag',
            templateUrl: 'Views/Coordinator/PartitionDetail.html',
            controller: 'PartitionManagCCtrl',
            parent:'HomeCoordinator'
        })

        .state('HomeCoordinator.EngineerC', {
            url: '/EngineerC',
            templateUrl: 'Views/Coordinator/Engineer.html',
            controller: 'EngineerCCtrl'
        })
        .state('HomeCoordinator.TeamC', {
            url: '/TeamC',
            templateUrl: 'Views/Coordinator/Team.html',
            controller: 'TeamCCtrl'
        })
        .state('updateVariableC', {
            url: '/updateVariableC',
            templateUrl: 'Views/Coordinator/Send.html',
            parent:'HomeCoordinator',
            controller:'updateVariableC'
        })
        .state('NewVariableC', {
            url: '/NewVariableC',
            templateUrl: 'Views/Coordinator/NewVariable.html',
            parent:'HomeCoordinator'
        })
        .state('HomeEngineer', {
            url: '/HomeEngineer',
            templateUrl: 'Views/Engineer/HomeEngineer.html'
        })

        .state('HomeEngineer.DashboardE', {
            url: '/DashboardE',
            templateUrl: 'Views/Engineer/Dashboard.html',
            controller: 'DashboardECtrl'

        })
        .state('HomeEngineer.PartitionE', {
            url: '/PartitionE',
            templateUrl: 'Views/Engineer/Partition.html',
            controller: 'PartitionECtrl'
        })

        .state('HomeEngineer.PartitionEManag', {
            url: '/PartitionEManag',
            templateUrl: 'Views/Engineer/PartitionManagement.html',
            parent:'HomeEngineer',
            controller:'PartitionEManagCtrl'


        })
        .state('updateVariableE', {
            url: '/updateVariableE',
            templateUrl: 'Views/Engineer/Send.html',
            parent:'HomeEngineer'
        })

	.state('profile', {
            url: '/profile',
            templateUrl: 'templates/myprofile.html',
            controller: 'ProfileCtrl'
        })

       .state('suitableOffers', {
            url: '/suitableOffers',
            templateUrl: 'templates/suitableOffers.html',
            controller: 'SuitableOffersCtrl'
        })
	  .state('offersByplace', {
            url: '/offersByplace',
            templateUrl: 'templates/offersByplace.html',
            controller: 'OffersByplaceCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html'
        })
        .state('services', {
            url: '/services',
            templateUrl: 'templates/services.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
        })
    ;

});