var services = angular.module('ColMEA.services', ['ngResource']);
var baseUrl = 'http://localhost:8080/ColMEA.Web/';


services.factory('AuthFactory',function($resource){

    return $resource(baseUrl + '/Users/auth/:login/:password');
});

