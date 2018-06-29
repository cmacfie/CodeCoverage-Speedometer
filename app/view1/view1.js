'use strict';

var app = angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}]);

app.controller('View1Ctrl', function ($scope) {
    $scope.releases = ["3.2", "3.2 SR1", "3.2 SR2", "3.2 SR3", "3.2 SR4", "3.2 SR5", "Sept 2017", "Sept" +
    " 2017 Patch 1", "Sept 2017 Patch 2", "Sept 2017 Patch 3", "Nov 2017", "Nov 2017 Patch 1", "Nov 2017" +
    " Patch 2"];
    // "November 2017", "November 2017 Patch 2", "November" +
    // " 2017 Patch 3"];
    // "June 2017", "June 2017 Patch 1", "June 2017 Patch 2", "June 2017 Patch 3"];
    $scope.apis = [];
    $scope.maxWidth = $scope.releases.length * 145;
    $scope.apis.push({
        data: [{
            ver: "3.2",
            form: "square",
            color: "Green",
            state: "experimental",
            oldVersionText: "",
            newVersionText: "openApp(appId)"
        },
            {
                ver: "3.2 SR1",
                form: "hidden",
                color: "White",
                state: "experimental",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "3.2 SR2",
                form: "square",
                color: "Yellow",
                state: "experimental",
                oldVersionText: "openApp(appId)",
                newVersionText: "openApp(appId, state)"
            },
            {
                ver: "3.2 SR3",
                form: "square",
                color: "Yellow",
                state: "experimental",
                oldVersionText: "openApp(appId," +
                " state)",
                newVersionText: "openApp(appId)"
            },
            {
                ver: "3.2 SR4",
                form: "hidden",
                color: "White",
                state: "experimental",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "3.2 SR5",
                form: "triangle",
                color: "transparent",
                state: "deprecated",
                oldVersionText: "",
                newVersionText: ""
            }], name: "openApp", startIndex: 0
    });
    $scope.apis.push({
        data: [{
            ver: "3.2",
            form: "square",
            color: "Green",
            state: "experimental",
            oldVersionText: "",
            newVersionText: "currApp()"
        },
            {
                ver: "2.2 SR1",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "currApp()",
                newVersionText: "currApp(state)"
            },
            {
                ver: "3.2 SR2",
                form: "hidden",
                color: "Yellow",
                state: "stable",
                oldVersionText: "currApp()",
                newVersionText: "currApp(state)"
            },
            {
                ver: "3.2 SR3",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "currApp(state)",
                newVersionText: "currApp(state, newState)"
            },
            {ver: "3.2 SR4", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR5", form: "circle", color: "White", state: "locked", oldVersionText: "", newVersionText: ""},
            {ver: "Sept 2017", form: "hidden", color: "White", state: "locked", oldVersionText: "", newVersionText: ""},
            {
                ver: "Sept 2017 Patch 1",
                form: "hidden",
                color: "White",
                state: "locked",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 2",
                form: "hidden",
                color: "White",
                state: "locked",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 3",
                form: "hidden",
                color: "White",
                state: "locked",
                oldVersionText: "",
                newVersionText: ""
            },
            {ver: "Nov 2017", form: "hidden", color: "White", state: "locked", oldVersionText: "", newVersionText: ""},
            {
                ver: "Nov 2017 Patch 1",
                form: "hidden",
                color: "White",
                state: "locked",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Nov 2017 Patch 2",
                form: "hidden",
                color: "White",
                state: "locked",
                oldVersionText: "",
                newVersionText: ""
            }], name: "currApp", startIndex: 0
    });
    $scope.apis.push({
        data: [{
            ver: "3.2 SR4",
            form: "circle",
            color: "Green",
            state: "stable",
            oldVersionText: "",
            newVersionText: "getGlobal(event)"
        },
            {
                ver: "3.2 SR5",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "getGlobal(event)",
                newVersionText: "getGlobal()"
            },
            {
                ver: "Sept 2017",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "getGlobal()",
                newVersionText: "getGlobal(event, id)"
            },
            {
                ver: "Sept 2017 Patch 1",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 2",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "getGlobal(event, id)",
                newVersionText: "getGlobal(event)"
            },
            {
                ver: "Sept 2017 Patch 3",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "getGlobal(event, id)",
                newVersionText: "getGlobal(event)"
            },
            {
                ver: "Nov 2017",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "getGlobal(event, id)",
                newVersionText: "getGlobal(event)"
            },
            {
                ver: "Nov 2017 Patch 1",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "getGlobal(event, id)",
                newVersionText: "getGlobal(event)"
            },
            {
                ver: "Nov 2017 Patch 2",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "getGlobal(event)",
                newVersionText: "getGlobal()"
            }], name: "getGlobal", startIndex: 4
    });
    $scope.apis.push({
        data: [{
            ver: "3.2",
            form: "square",
            color: "Green",
            state: "experimental",
            oldVersionText: "",
            newVersionText: "setOnError()"
        },
            {
                ver: "2.2 SR1",
                form: "square",
                color: "Yellow",
                state: "experimental",
                oldVersionText: "setOnError()",
                newVersionText: "setOnError(state)"
            },
            {
                ver: "3.2 SR2",
                form: "square",
                color: "White",
                state: "experimental",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "3.2 SR3",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "setOnError(state)",
                newVersionText: "setOnError(state, newState)"
            },
            {ver: "3.2 SR4", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR5", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "Sept 2017", form: "square", color: "White", state: "locked", oldVersionText: "", newVersionText: ""},
            {
                ver: "Sept 2017 Patch 1",
                form: "square",
                color: "White",
                state: "locked",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 2",
                form: "square",
                color: "White",
                state: "locked",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 3",
                form: "square",
                color: "White",
                state: "locked",
                oldVersionText: "",
                newVersionText: ""
            },
            {ver: "Nov 2017", form: "square", color: "White", state: "locked", oldVersionText: "", newVersionText: ""},
            {
                ver: "Nov 2017 Patch 1",
                form: "square",
                color: "White",
                state: "locked",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Nov 2017 Patch 2",
                form: "square",
                color: "White",
                state: "locked",
                oldVersionText: "",
                newVersionText: ""
            }], name: "setOnError", startIndex: 0
    });
    $scope.apis.push({
        data: [
            {
                ver: "3.2 SR1",
                form: "circle",
                color: "Green",
                state: "stable",
                oldVersionText: "",
                newVersionText: "setLanguage(state)"
            },
            {
                ver: "3.2 SR2",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "setLanguage(state)",
                newVersionText: "setLanguage(state, newState)"
            },
            {ver: "3.2 SR3", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR4", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR5", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "Sept 2017", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {
                ver: "Sept 2017 Patch 1",
                form: "circle",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 2",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "setLanguage(state,newState)",
                newVersionText: "setLanguage(state)"
            },
            {
                ver: "Sept 2017 Patch 3",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "setLanguage(state)",
                newVersionText: "setLanguage(state, setLang)"
            },
            {
                ver: "Nov 2017",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "setLanguage(state, setLang)",
                newVersionText: "setLanguage(state)"
            },
            {
                ver: "Nov 2017 Patch 1",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "setLanguage(state)",
                newVersionText: "setLanguage(state, setLang)"
            },
            {
                ver: "Nov 2017 Patch 2",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "setLanguage(state, setLang)",
                newVersionText: "setLanguage(state)"
            }], name: "setLanguage", startIndex: 1
    });
    $scope.apis.push({
        data: [{
            ver: "3.2",
            form: "square",
            color: "Green",
            state: "stable",
            oldVersionText: "",
            newVersionText: "table()"
        },
            {
                ver: "2.2 SR1",
                form: "circle",
                color: "White",
                state: "stable",
                oldVersionText: "currApp()",
                newVersionText: "currApp(state)"
            },
            {
                ver: "3.2 SR2",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "currApp()",
                newVersionText: "currApp(state)"
            },
            {
                ver: "3.2 SR3",
                form: "circle",
                color: "White",
                state: "stable",
                oldVersionText: "currApp(state)",
                newVersionText: "currApp(state, newState)"
            },
            {ver: "3.2 SR4", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "3.2 SR5", form: "circle", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {ver: "Sept 2017", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {
                ver: "Sept 2017 Patch 1",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 2",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 3",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {ver: "Nov 2017", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {
                ver: "Nov 2017 Patch 1",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Nov 2017 Patch 2",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            }], name: "table", startIndex: 0
    });
    $scope.apis.push({
        data: [{
            ver: "3.2",
            form: "square",
            color: "Green",
            state: "stable",
            oldVersionText: "",
            newVersionText: "getAppList()"
        },
            {
                ver: "2.2 SR1",
                form: "circle",
                color: "White",
                state: "stable",
                oldVersionText: "currApp()",
                newVersionText: "currApp(state)"
            },
            {
                ver: "3.2 SR2",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "currApp()",
                newVersionText: "currApp(state)"
            },
            {
                ver: "3.2 SR3",
                form: "circle",
                color: "White",
                state: "stable",
                oldVersionText: "currApp(state)",
                newVersionText: "currApp(state, newState)"
            },
            {ver: "3.2 SR4", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {
                ver: "3.2 SR5",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "getAppList()",
                newVersionText: "getAppList(id)"
            },
            {ver: "Sept 2017", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {
                ver: "Sept 2017 Patch 1",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 2",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 3",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {ver: "Nov 2017", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {
                ver: "Nov 2017 Patch 1",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Nov 2017 Patch 2",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            }], name: "getAppList", startIndex: 0
    });
    $scope.apis.push({
        data: [{
            ver: "3.2",
            form: "square",
            color: "Green",
            state: "experimental",
            oldVersionText: "",
            newVersionText: "resize()"
        },
            {
                ver: "2.2 SR1",
                form: "circle",
                color: "White",
                state: "experimental",
                oldVersionText: "currApp()",
                newVersionText: "currApp(state)"
            },
            {
                ver: "3.2 SR2",
                form: "hidden",
                color: "White",
                state: "experimental",
                oldVersionText: "currApp()",
                newVersionText: "currApp(state)"
            },
            {
                ver: "3.2 SR3",
                form: "circle",
                color: "Yellow",
                state: "experimental",
                oldVersionText: "resize()",
                newVersionText: "resize(size)"
            },
            {
                ver: "3.2 SR4",
                form: "hidden",
                color: "White",
                state: "experimental",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "3.2 SR5",
                form: "circle",
                color: "Yellow",
                state: "stable",
                oldVersionText: "getAppList()",
                newVersionText: "getAppList(id)"
            },
            {ver: "Sept 2017", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {
                ver: "Sept 2017 Patch 1",
                form: "hidden",
                color: "Yellow",
                state: "stable",
                oldVersionText: "resize(size)",
                newVersionText: "resize(size, id)"
            },
            {
                ver: "Sept 2017 Patch 2",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 3",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {ver: "Nov 2017", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {
                ver: "Nov 2017 Patch 1",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Nov 2017 Patch 2",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            }], name: "resize", startIndex: 0
    });
    $scope.apis.push({
        data: [
            {
                ver: "Sept 2017 Patch 1",
                form: "hidden",
                color: "Green",
                state: "stable",
                oldVersionText: "",
                newVersionText: "theme(name)"
            },
            {
                ver: "Sept 2017 Patch 2",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Sept 2017 Patch 3",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {ver: "Nov 2017", form: "hidden", color: "White", state: "stable", oldVersionText: "", newVersionText: ""},
            {
                ver: "Nov 2017 Patch 1",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            },
            {
                ver: "Nov 2017 Patch 2",
                form: "hidden",
                color: "White",
                state: "stable",
                oldVersionText: "",
                newVersionText: ""
            }], name: "theme", startIndex: 7
    });


    $scope.getForm = function (state, lastState, nextState, color) {
        if (state === lastState && color !== 'Yellow') {
            return 'hidden';
        } else if (nextState === 'locked') {
            return 'triangle ' + color;
        } else if (state === 'experimental') {
            return 'square';
        } else if (state === 'stable') {
            return 'circle';
        } else if (state === 'deprecated') {
            return 'triangle red';
        } else {
            return 'circle'
        }
    }

    $scope.getBackground = function (bg) {
        switch (bg) {
            case 'Red':
                return "linear-gradient(rgb(255,0,0), rgb(210,0,0))"
                // return "rgba(255,0,0,0.9)";
                break;
            case 'White':
                return "linear-gradient(rgb(255,255,255), rgb(210,210,255))";
                // return "rgba(255,255,255,0.9)";
                break;
            case 'Green':
                return "linear-gradient(rgb(0,255,0), rgb(0,210,0))";
                // return "rgba(0,255,0,0.9)";
                break;
            case 'Yellow':
                return "linear-gradient(rgb(255,255,0,0.9), rgb(210,210,0))";
                // return "rgba(255,255,0,0.9)";
                break;
        }
    }

    // function getDecimal(){
    //     var r = "" + Math.random();
    //     console.log(r);
    //     console.log(r.slice(0,6));
    //     return r;
    // }
    //
    // $scope.getAnimation = function () {
    //     return getDecimal();
    // }
    //
    //
    // // $scope.getAnimation = function (){
    // //     return (Math.random()*2+ 2) + "s";
    // // }
    var isActive = false;
    var currActive = "";
    var lastActive;

    var activeNewVersionAPI, activeOldVersionApi, activeOldVersionText, activeNewVerisonText, activeDetails
    $scope.setActive = function (ver, $event) {
        console.log($event.target, lastActive, "hej")
        if($event.target === lastActive) {
            console.log(ver, lastActive, "hej")
            isActive = false;
            lastActive = undefined;
            $($event.target).addClass('animateOut');
            setTimeout(function () {
                $($event.target).removeClass('clicked');
                $($event.target).removeClass('animateOut');
                // lastActive = $event.target;
            }, 1000)
        } else {
            isActive = true;
            activeNewVerisonText = $scope.newVersionText;
            activeNewVersionAPI = $scope.newVersionAPI;
            activeOldVersionApi = $scope.oldVersionAPI;
            activeOldVersionText = $scope.oldVersionText;
            activeDetails = $scope.detailsBoxAPI;
            currActive = ver;
            if ($event.target !== lastActive) {
                $(lastActive).addClass('animateOut');
                setTimeout(function () {
                    $(lastActive).removeClass('animateOut');
                    $(lastActive).removeClass('clicked');
                    lastActive = $event.target;
                }, 1000)
            }

            $($event.target).addClass('clicked')
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

    $scope.hoverIn = function (oldVersionAPI, oldVersionText, newVersionAPI, newVersionText, detailsBoxAPI) {
        // $(lastActive).removeClass('clicked');
        // $(lastActive).removeClass('clicked');
        $("#detailsBox").addClass("fadeIn");
        setTimeout(function(){
            $("#detailsBox").removeClass("fadeIn");
        },250)
        if (oldVersionText === "" && newVersionText !== '') {
            $scope.newVersionAPI = newVersionAPI;
            $scope.newVersionText = newVersionText;
            $scope.detailsBoxAPI = detailsBoxAPI;
            $scope.showInfo = true;
            $scope.showDef = true;
        }
        else if (oldVersionText !== "") {
            $scope.oldVersionText = oldVersionText;
            $scope.newVersionText = newVersionText;
            $scope.oldVersionAPI = oldVersionAPI;
            $scope.newVersionAPI = newVersionAPI;
            $scope.detailsBoxAPI = detailsBoxAPI;
            $scope.showInfo = true;
            $scope.showDef = false;
        }
    }
    $scope.hoverOut = function (ver) {
        if(isActive) {
            $scope.oldVersionText = activeOldVersionText;
            $scope.newVersionText = activeNewVerisonText;
            $scope.oldVersionAPI = activeOldVersionApi;
            $scope.newVersionAPI = activeNewVersionAPI;
            $scope.detailsBoxAPI = activeDetails;
        }
        else if (ver !== currActive || !isActive) {
            $scope.showInfo = false;
            $scope.showDef = false;
        }
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