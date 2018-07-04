'use strict';

var app = angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}]);

app.controller('View1Ctrl', function ($scope) {

    // var deg = 180;

    $scope.repos = [{name: "api-monitor-mashup", currProc: 68.5, lastProc: 82.72, locCov: "1000", locTot: "1923"},
        {name: "apiculturist", currProc: 92.53, lastProc: 91.67, locCov: "1320", locTot: "3201"},
        {name: "la-vie", currProc: 54.02, lastProc: 52.15, locCov: "1320", locTot: "3201"},
        {name: "geo-server", currProc: 11.84, lastProc: 11.84, locCov: "1320", locTot: "3201"},
        {name: "sense-client", currProc: 36.72, lastProc: 36.29, locCov: "1320", locTot: "3201"},
        {name: "sense-client/dev-hub", currProc: 45.26, lastProc: 45.26, locCov: "1320", locTot: "3201"},
        {name: "depghraph-service", currProc: 45.68, lastProc: 45.68, locCov: "1320", locTot: "3201"},
        {name: "api-monitor-mashup", currProc: 68.5, lastProc: 82.72, locCov: "1000", locTot: "1923"},
        {name: "apiculturist", currProc: 92.53, lastProc: 91.67, locCov: "1320", locTot: "3201"},
        {name: "la-vie", currProc: 54.02, lastProc: 52.15, locCov: "1320", locTot: "3201"},
        {name: "geo-server", currProc: 11.84, lastProc: 11.84, locCov: "1320", locTot: "3201"},
        {name: "sense-client", currProc: 36.72, lastProc: 36.29, locCov: "1320", locTot: "3201"},
        {name: "sense-client/dev-hub", currProc: 45.26, lastProc: 45.26, locCov: "1320", locTot: "3201"},
        {name: "depghraph-service", currProc: 45.68, lastProc: 45.68, locCov: "1320", locTot: "3201"},];

    // $scope.randNumbers = [];
    $scope.getPercentColor = function (repo) {
        var res = repo.currProc - repo.lastProc;
        // console.log(res);
        if (res > 1) {
            return {"color": "yellowgreen"};
        } else if (res < -1) {
            return {"color": "#da001a"};
        } else {
            return {"color": "yellow"};
        }
    }

    function makeAnimationKeyframes(index) {
        // console.log($scope.randNumbers)
        var repo = $scope.repos[index];
        var arrowDeg = -90 + repo.currProc / 100 * 180;
        $.keyframe.define([{
            name: 'animateShadow' + index,
            '0%': {'transform': 'rotate(' + (0) + 'deg)'},
            '90%, 100%': {'transform': 'rotate(' + (repo.currProc / 100 * 180) + 'deg)'}
        }
        ]);
        $.keyframe.define([{
            name: 'animateArrow' + index,
            '0%': {'transform': 'rotate(' + (-90) + 'deg)'},
            '10%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * 0.2) + 'deg)'},
            '20%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * -0.2) + 'deg)'},
            '30%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * 0.1) + 'deg)'},
            '40%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * -0.1) + 'deg)'},
            '50%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * -0.05) + 'deg)'},
            '60%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * 0.05) + 'deg)'},
            '100%': {'transform': 'rotate(' + (arrowDeg) + 'deg)'}
        }
        ]);
        $.keyframe.define([{
            name: 'animateArrowWhite' + index,
            '0%': {'opacity': '0.6', 'transform': 'rotate(' + (-90 + repo.currProc / 100 * 180) + 'deg)'},
            '100%': {'opacity': '0.6', 'transform': 'rotate(' + (-90 + repo.lastProc / 100 * 180) + 'deg)'}
        }
        ]);
        // console.log(-90 + $scope.randNumbers[index], (-90 + $scope.randNumbers[index]) * 0.7);
        // $(".pieShadow").playKeyframe(
        //   'animateShadow 1.5s cubic-bezier(0.3,0,0.2,1) 0s 1 normal forwards'
        // );
    }


    function setUpAnimation() {
        $('.mainPercent').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now) + '%');
                }
            });
        });
        $('.textContainer h1').each(function (index) {
            $(this).css('animation-delay', Math.floor(Math.random() * 60) + 's');
        });
        $('.gradient-pie').each(function (index) {
            $(this).css('animation-delay', Math.floor(Math.random() * 60) + 's');
        });

        $(".pieShadow").each(function (index) {
            makeAnimationKeyframes(index)
            // console.log(this, index);
            $(this).playKeyframe(
                'animateShadow' + index + ' 1.5s cubic-bezier(0.3,0,0.2,1) 0s 1 normal forwards'
            );
        });

        $(".arrowBlack").each(function (index) {
            // console.log(this, index);
            $(this).playKeyframe(
                'animateArrow' + index + ' 1.5s cubic-bezier(0.3,0,0.2,1) 0s 1 normal forwards'
            );
        });
        $(".arrowWhite").each(function (index) {
            // console.log(this, index);
            $(this).playKeyframe(
                'animateArrowWhite' + index + ' 1.5s cubic-bezier(0.3,0,0.2,1) 1.5s 1 normal forwards'
            );
        });
    }


    var $injector = angular.injector(["ng"]);
    var deferred = $injector.get("$q");

    var setWidth = function (divsPerRow) {
        var newWidth = $(window).width() / divsPerRow;
        var origWidth = 350;
        console.log("Window", $(window).width(), "newWidth", newWidth, newWidth * divsPerRow);
        var scale = (newWidth / origWidth);
        // console.log(scale);
        $('.metricContainer').css({
            'transform': 'scale(' + scale * 0.9 + ')',
            'margin': -(origWidth - newWidth) / 2 - 5 + 'px',
            // 'margin-right': -(origWidth-newWidth)/2-5+ 'px',
        });
        $('.bottomText').css({
            'margin': -((origWidth - newWidth) / 2 - 5) + 'px'
        });
        // console.log(width / 7)
        // var metricContainer = $(".metricContainer");
        // var padding = metricContainer.css('padding-left').slice(0, metricContainer.css('padding-left').length - 2) << 1;
        // var border = metricContainer.css('border-width').slice(0, metricContainer.css('border-width').length - 2) * 2;
        // var margin = metricContainer.css('margin').slice(0, metricContainer.css('margin').length - 2) * 2;
        // var inlineBlockMargin = -2 * 4;
        // var newWidth = (width / divsPerRow) - padding - border - margin + inlineBlockMargin;
        // $(".metricContainer").css({'width': newWidth + 'px', 'height': newWidth / 2 + 'px'});
        // $(".arrow").css({
        //     'border-bottom-width': newWidth / 2 + 'px',
        //     'border-left-width': newWidth * 0.03 + 'px',
        //     'border-right-width': newWidth * 0.03 + 'px',
        //     'left': 'calc(50% - ' + newWidth * 0.03 + 'px)'
        // })
    }


    // function generateRandNumbers(){
    //     for (var i = 0; i < $scope.repos.length; i++) {
    //         var r = Math.floor(Math.random() * 180);
    //         $scope.randNumbers.push(r);
    //         console.log(r / 180);
    //         var sliced = r / 180 > 0.1 ? (r / 180 + "000").slice(2, 4) : (r / 180 + "000").slice(3, 4);
    //         $("#text" + i).text(sliced + '%')
    //     }
    // }


    function setUpCSS(objsPerRow) {
        var renderedObjects = [];
        var p1 = new Promise(function (resolve, reject) {
            var checkExist = setInterval(function () {
                if ($('.arrow').length > objsPerRow) {
                    resolve("Found");
                    clearInterval(checkExist);
                }
            }, 100);
        });
        var p2 = new Promise(function (resolve, reject) {
            var checkExist = setInterval(function () {
                if ($('.metricContainer').length >= objsPerRow) {
                    resolve("Found");
                    clearInterval(checkExist);
                }
            }, 100);
        });
        renderedObjects.push(p1);
        renderedObjects.push(p2);
        deferred.all(renderedObjects).then(function () {
            console.log("Resolved")
            // generateRandNumbers();
            // setWidth($scope.numOfObjs);
            setUpAnimation();
            setWidth(objsPerRow)
        });
    }

    // console.log($scope.repos.length);
    setUpCSS(7);
    // var p1 = new Promise(function(resolve, reject){
    //     var checkExist = setInterval(function() {
    //         if ($('.arrow').length > 3) {
    //             resolve("Found");
    //             clearInterval(checkExist);
    //         }
    //     }, 100);
    // });
    // p.then(function(){
    //     setWidth(1);
    // });
    // $(document).find(".metricContainer").then(setWidth(7));
    // setWidth($(".metricContainer"));
});
