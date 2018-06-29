'use strict';

var app = angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}]);

app.controller('View1Ctrl', function ($scope) {
    console.log($scope)
    $scope.releases = ["3.2", "3.2 SR1", "3.2 SR2", "3.2 SR3", "3.2 SR4", "3.2 SR5", "September 2017"]
        // , "September 2017 Patch 2", "September 2017 Patch 3", "November 2017", "November 2017 Patch 2", "November 2017 Patch 3",
        // "June 2017", "June 2017 Patch 1", "June 2017 Patch 2", "June 2017 Patch 3"]
    $scope.apis = [];
    $scope.apis.push({
        data: [{ver: "3.2", form: "square", color: "Green", state: "experimental", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR1", form: "hidden", color: "White", state: "experimental", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR2", form: "square", color: "Yellow", state: "experimental", oldVersionText: "openApp(appId)", newVersionText: "openApp(appId, state)"},
            {ver: "3.2 SR3", form: "square", color: "Yellow", state: "experimental", oldVersionText: "openApp(appId," +
                " state)", newVersionText: "openApp(appId)"},
            {ver: "3.2 SR4", form: "hidden", color: "White", state: "experimental", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR5", form: "triangle", color: "transparent", state: "deprecated", oldVersionText: "", newVersionText: ""}], name: "openApp", startIndex: 0
    });
    $scope.apis.push({
        data: [{ver: "3.2", form: "square", color: "Green", state: "experimental", oldVersionText: "", newVersionText: ""},
            {ver: "2.2 SR1", form: "circle", color: "Yellow", state: "stable", oldVersionText: "currApp()", newVersionText: "currApp(state)"},
            {ver: "3.2 SR2", form: "hidden", color: "Yellow", state: "stable", oldVersionText:"currApp()", newVersionText: "currApp(state)"},
            {ver: "3.2 SR3", form: "circle", color: "Yellow", state: "stable", oldVersionText: "currApp(state)", newVersionText: "currApp(state, newState)"},
            {ver: "3.2 SR4", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR5", form: "circle", color: "White", state: "locked", oldVersionText: "", newVersionText: ""},
            {ver: "September 2017", form: "hidden", color: "White", state: "locked", oldVersionText: "", newVersionText: ""},
            {ver: "September 2017 Patch 1", form: "hidden", color: "White", state: "locked", oldVersionText: "", newVersionText: ""}], name: "currApp", startIndex: 0
    });
    $scope.apis.push({
        data: [{ver: "3.2 SR4", form: "circle", color: "Green", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR5", form: "circle", color: "Yellow", state: "stable", oldVersionText: "getGlobal(event)", newVersionText: "getGlobal()"},
            {ver: "September 2017", form: "circle", color: "Yellow", state: "stable", oldVersionText: "getGlobal()", newVersionText: "getGlobal(event, id)"},
            {ver: "September 2017 Patch 1", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""}], name: "getGlobal", startIndex: 4
    });
    $scope.apis.push({
        data: [{ver: "3.2", form: "square", color: "Green", state: "experimental", oldVersionText: "", newVersionText: ""},
            {ver: "2.2 SR1", form: "square", color: "Yellow", state: "experimental", oldVersionText: "setOnError()", newVersionText: "setOnError(state)"},
            {ver: "3.2 SR2", form: "square", color: "White", state: "experimental", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR3", form: "circle", color: "Yellow", state: "stable", oldVersionText: "setOnError(state)", newVersionText: "setOnError(state, newState)"},
            {ver: "3.2 SR4", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR5", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "September 2017", form: "square", color: "White", state: "locked", oldVersionText: "", newVersionText: ""},
            {ver: "September 2017 Patch 1", form: "square", color: "White", state: "locked", oldVersionText: "", newVersionText: ""}], name: "setOnError", startIndex: 0
    });
    $scope.apis.push({
        data: [
            {ver: "2.2 SR1", form: "circle", color: "Green", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR2", form: "circle", color: "Yellow", state: "stable", oldVersionText: "setLanguage(state)", newVersionText: "setLanguage(state, newState)"},
            {ver: "3.2 SR3", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR4", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR5", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "September 2017", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "September 2017 Patch 1", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""}], name: "setLanguage", startIndex: 1
    });

    $scope.getForm = function(state, lastState, color){
        if(state === lastState && color !== 'Yellow') {
            return 'hidden';
        } else if(state === 'experimental') {
            return 'square';
        } else if(state === 'stable'){
            return 'circle';
        } else if(state === 'deprecated'){
            return 'triangle';
        } else {
            return 'circle'
        }
    }






    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    $scope.hoverIn = function (oldVersionAPI, oldVersionText, newVersionAPI, newVersionText,detailsBoxAPI) {
        if(oldVersionText !== "") {
            $scope.oldVersionText = oldVersionText;
            $scope.newVersionText = newVersionText;
            $scope.oldVersionAPI = oldVersionAPI;
            $scope.newVersionAPI = newVersionAPI;
            $scope.detailsBoxAPI = detailsBoxAPI;
            $scope.showInfo = true;
        }
    }
    $scope.hoverOut = function () {
        $scope.showInfo = false;
    }
});

// 'use strict';
//
// var app = angular.module('myApp.view1', ['ngRoute']);
//
// app.config(['$routeProvider', function($routeProvider) {
//     $routeProvider.when('/view1', {
//         templateUrl: 'view1/view1.html',
//         controller: 'View1Ctrl'
//     });
// }]);

// app.controller('View1Ctrl', function($scope) {
//     console.log($scope)
//     $scope.apis = [];
//     var data = [];
//     data.push([{ver: "Ver1", form: "square", color: "Green"},
//         {ver: "Ver2", form: "square", color: "Yellow"},
//         {ver: "Ver3", form: "square", color: "Yellow"},
//         {ver: "Ver4", form: "circle", color: "Yellow"},
//         {ver: "Ver5", form: "circle", color: "Grey"},
//         {ver: "Ver6", form: "circle", color: "Red"}]);
//     data.push([{ver: "Ver1", form: "square", color: "Green"},
//         {ver: "Ver2", form: "square", color: "Yellow"},
//         {ver: "Ver3", form: "square", color: "White"},
//         {ver: "Ver4", form: "circle", color: "Yellow"},
//         {ver: "Ver5", form: "circle", color: "White"},
//         {ver: "Ver6", form: "circle", color: "Yellow"},
//         {ver: "Ver7", form: "circle", color: "White"}]);
//     apis.push(versions);
//     console.log($scope.apis);
//     $scope.hoverIn = function(){
//         this.showInfo = true;
//     }
//     $scope.hoverOut = function(){
//         this.showInfo = false;
//     }
// });