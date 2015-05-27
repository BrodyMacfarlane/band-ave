var app = angular.module('bandAve', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.when('/signup', {
			templateUrl: 'templates/signup.html',
			controller: 'signupCtrl'
		})
		.when('/user-login', {
			templateUrl: 'templates/user-login.html'
		})
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	})
})