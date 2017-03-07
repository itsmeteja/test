
var mainApp = angular.module("mainApp", ['ngRoute'])

mainApp.config(function ($routeProvider) {

	$routeProvider
		.when('/home', {
			templateUrl: '/app/partials/home.html',
			controller: 'StudentController'
		})
		.when('/viewStudents', {
		    templateUrl: '/app/partials/viewStudents.html',
			controller: 'StudentController'
		})
        .when('/courses', {
            templateUrl: '/app/partials/courses.html',
            controller: 'StudentController'
        })

		.otherwise({
			redirectTo: '/home'
		});
});

mainApp.controller('StudentController', function($scope) {
	$scope.students = [
		{name: 'Mark Waugh', city:'New York'},
		{name: 'Steve Jonathan', city:'London'},
		{name: 'John Marcus', city:'Paris'}
	];

	$scope.message = "Click on the hyper link to view the students list.";
});