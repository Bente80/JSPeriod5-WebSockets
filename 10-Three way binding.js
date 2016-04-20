/**
 * Created by Bente on 19-04-2016.
 *
 * 10. Explain and demonstrate “three-way data binding” using Firebase and Angular
 *
 * Three-way synchronization between Firebase and your application’s View and Model in Angular is the easiest way to build collaborative,
 * multi-user applications.
 * AngularJS is known for its two-way data binding between models in JavaScript and the DOM. Changes in the view are automatically
 * reflected in the model, and vice versa. Developers don’t have to worry about writing code to synchronize the view and the model or
 * manipulate the DOM.
 * By syncing your Angular model with Firebase, your app’s data in the model is synchronized in real-time across all clients.
 * When data changes in one client, those updates are immediately persisted to Firebase and rendered across all clients.
 */

/** 1. Include the Firebase and AngularFire libraries in our head tag:
<script src="https://cdn.firebase.com/js/client/2.4.2/firebase.js"></script>
<script src="https://cdn.firebase.com/libs/angularfire/0.6.0/angularfire.min.js"></script> */

/** 2. Create a module that declares Firebase as a dependency for our application */
    var myapp = angular.module("myapp", ["firebase"]);

/** 3. To display each neighborhood in the DOM, we’ll create a div for each neighborhood using ng-repeat. Each div will contain the
 *     current weather forecast along with buttons for sunny and foggy. */
    <pre><div ng-repeat="neighborhood in neighborhoods" ng-controller="NeighborhoodController">

/** 4. We’ve linked this div to our NeighborhoodController, which means we can use Angular’s {{expressions}} to dynamically display
 *     the neighborhood data. */
    function NeighborhoodController($scope, $firebase) {

/** 5. We’ll attach ng-click directives to our buttons to call the function updateCount() whenever a button is clicked, and we’ll write
 *     this function in the next section.  */
    <a href="#" ng-click="updateCount('sunny')">Sunny</a>

/** 6. In order to store the neighborhood data in Firebase, we’ll need to pass each neighborhood to our controller. We’ll do this using
       Angular’s ng-init directive: */
    <div ng-controller="NeighborhoodController" ng-init="init(neighborhood.value)">

    /** 7. This directive binds our weather div to a function called ‘init’ in our controller, which is executed once for each neighborhood./*
    $scope.init = function(neighborhood) {

/** 8. Inside this ‘init’ function, we’ll create a Firebase reference for each neighborhood. Then we’ll call the checkWeather() function
 *     whenever the data changes. */
    $scope.neighborhood = neighborhood;

        var FBURL = "https://angular-experiment.firebaseio.com/";
        $scope.data = $firebase(new Firebase(FBURL + neighborhood));

        $scope.data.$on('loaded', checkWeather);
        $scope.data.$on('change', checkWeather);

/** 9. checkWeather() simply compares the values of sunny and foggy to display the corresponding sun or fog image. */

function checkWeather() {
    if ($scope.data.sunny >= $scope.data.foggy) {
        $scope.weather = "sunny";
    } else {
        $scope.weather = "foggy";
    }}}

/** 10. The final step is writing our updateCount() function, which increments the value of sunny or foggy for the neighborhood that
 *      was clicked. This function makes use of Firebase transactions to ensure that all data will be sent to the server when multiple
 *      people increment a counter at the same time.  */

$scope.updateCount = function(forecase) {
    var forecastRef = new Firebase(FBURL + neighborhood);
    forecastRef.transaction(function(current_val) {
        if( !current_val ) {
            current_val = {sunny: 0, foggy: 0, forecast: 0};
        }

        current_val.forecast++;
        current_val[forecast]++;
        return current_val;
    });
};

/** 11. That’s it! Now we have a working application that combines Angular’s two-way data binding with Firebase’s real-time database for
 *      triple awesomeness.
 *      To see the full code look at this git link:  https://github.com/sararob/crowdsourced-fog/tree/gh-pages

 *  Link:    https://www.firebase.com/blog/2013-10-04-firebase-angular-data-binding.html */