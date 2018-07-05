'use strict';

var app = angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}]);

app.filter('range', function () {
    return function (input, total) {
        total = parseInt(total);

        for (var i = 0; i < total; i++) {
            input.push(i);
        }

        return input;
    };
});

app.controller('View1Ctrl', function ($scope) {

    // var deg = 180;

    $scope.repos = [{name: "api-monitor-mashup", currProc: 68.5, lastProc: 82.72, locCov: "1000", locTot: "1923"},
        {name: "apiculturist", currProc: 92.53, lastProc: 91.67, locCov: "1320", locTot: "3201"},
        {name: "la-vie", currProc: 54.02, lastProc: 52.15, locCov: "1320", locTot: "3201"},
        {name: "geo-server", currProc: 11.84, lastProc: 11.84, locCov: "1320", locTot: "3201"},
        {name: "sense-client", currProc: 36.72, lastProc: 10.29, locCov: "1320", locTot: "3201"},
        {name: "sense-client/dev-hub", currProc: 45.26, lastProc: 45.26, locCov: "1320", locTot: "3201"},
        {name: "depghraph-service", currProc: 45.68, lastProc: 45.68, locCov: "1320", locTot: "3201"},
        {name: "api-monitor-mashup", currProc: 50.5, lastProc: 82.72, locCov: "1000", locTot: "1923"},
        {name: "apiculturist", currProc: 31.53, lastProc: 91.67, locCov: "1320", locTot: "3201"},
        {name: "la-vie", currProc: 54.02, lastProc: 52.15, locCov: "1320", locTot: "3201"},
        {name: "geo-server", currProc: 11.84, lastProc: 11.84, locCov: "1320", locTot: "3201"},
        {name: "sense-client", currProc: 36.72, lastProc: 36.29, locCov: "1320", locTot: "3201"},
        {name: "sense-client/dev-hub", currProc: 45.26, lastProc: 45.26, locCov: "1320", locTot: "3201"},
        {name: "depghraph-service", currProc: 45.68, lastProc: 45.68, locCov: "1320", locTot: "3201"},];


    $scope.get7Repos = function (index) {
        return $scope.repos.slice(index * 7, index * 7 + 7);
    }

    $scope.change = function () {
        $scope.repos = [{name: "api-monitor-mashup", currProc: 50.5, lastProc: 82.72, locCov: "1000", locTot: "1923"},
            {name: "apiculturist", currProc: 50.53, lastProc: 91.67, locCov: "1320", locTot: "3201"},
            {name: "la-vie", currProc: 50.02, lastProc: 52.15, locCov: "1320", locTot: "3201"},
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
        // console.log($scope.repos);
        setUpLook(7);
    }

    // $scope.randNumbers = [];
    $scope.setPercentCSS = function (repo) {
        var res = repo.currProc - repo.lastProc;
        // console.log(res);
        if (res > 1) {
            return {"color": "yellowgreen", 'font-size': 30 + res / 100 * 30 + 'px'};
        } else if (res < -1) {
            return {"color": "crimson", 'font-size': 30 - res / 100 * 30 + 'px'};
        } else {
            return {"color": "white", 'font-size': 30 - res / 100 * 30 + 'px'};
        }
    }

    function makeAnimationKeyframes(index) {
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
        $('.mainPercent').each(function (index) {
            var prevProc = parseFloat($(this).text().slice(0, $(this).text().length - 1));
            // console.log($scope.repos[index].currProc, prevProc);
            $(this).prop('Counter', (prevProc === $scope.repos[index].currProc ? 0 : prevProc)).animate({
                Counter: $scope.repos[index].currProc
            }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now) + '%');
                }
            });
        });
        $('.shineText').each(function (index) {
            $(this).css('animation-delay', Math.floor(Math.random() * 60) + 's');
        });
        $('.gradient-pie').each(function (index) {
            $(this).css('animation-delay', Math.floor(Math.random() * 60) + 's');
        });

        $(".pieShadow.black").each(function (index) {
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
        // if ($("#metersRow").width() === 1140) {
        //     // $("#metersRow").css('width', $(window).width()*0.8 + 'px');
        //     // $("#metersRow").css('margin-left', -$(window).width()*0.1 + 'px');
        //     $(".container").css('width', $(window).width() * 0.9 + 'px');
        //     $(".container").css('max-width', $(window).width() * 0.9 + 'px');
        //     // $(".container").css('margin-left', -$(window).width()*0.1 + 'px');
        // }
        // // } else {
        // var newWidth = $("#metersRow").width() / divsPerRow;
        // var origWidth = 350;
        // console.log("Window", $("#metersRow"), "newWidth", newWidth, newWidth * divsPerRow);
        // var scale = (newWidth / origWidth);
        // console.log(scale*newWidth)
        // // console.log(scale);
        // $('.metricContainer').css({
        //     'transform': 'scale(' + scale * 0.9 + ')',
        //     // 'width': newWidth + 'px',
        //     // 'margin': '0px',
        //     'margin-right': -(origWidth - newWidth) / 2 - 5 + scale*0.1 + 'px'
        //     // 'margin-left:':
        //     // 'margin-right': -(origWidth-newWidth)/2-5+ 'px',
        // });
        // }
        // $('.bottomText').css({
        //     'margin': -((origWidth - newWidth) / 2 - 5) + 'px'
        // });
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

    function setUpCSS() {
        $('.pieShadow.diff').each(function (index) {
            var repo = $scope.repos[index];
            var startDeg = repo.currProc / 100 * 180;
            var stopDeg = repo.lastProc / 100 * 180;
            if (startDeg > stopDeg) {
                let temp = startDeg;
                startDeg = stopDeg;
                stopDeg = temp;
            }
            var color = repo.currProc - repo.lastProc > 0 ? 'darkgreen' : 'crimson';
            // console.log(color, startDeg, stopDeg, this);
            $(this).css('background', 'conic-gradient(transparent ' + startDeg + 'deg,' + color + ' ' + startDeg + 'deg, ' + color + ' ' + stopDeg + 'deg, transparent ' + stopDeg + 'deg)');
        });
    }

    function setUpLook(objsPerRow) {
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
        var p3 = new Promise(function (resolve, reject) {
            var checkExist = setInterval(function () {
                if ($('.pieShadow.red').length >= objsPerRow) {
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
            setUpCSS();
        });
    }

    $scope.getGradientCSS = function (repo) {
        console.log(repo);
        var diff = repo.currProc - repo.lastProc;
        var color1 = 'transparent';
        var color2 = 'transparent';
        if (diff < -1.0) {
            color1 = 'rgba(220, 20, 60,0.6)';
            color2 = 'rgba(220, 20, 60,0.2)';
        } else if(diff > 1.0){
            color1 = 'rgba(154, 205, 50,0.6)';
            color2 = 'rgba(154, 205, 50,0.2)';
        }
        // let color = diff > 1 ? 'green' : (diff < 1 ? 'red' : 'transparent');
        console.log(diff, color1);
        return {'background': 'linear-gradient(' +color1 + ',' + color2 + '10%, transparent 30%, transparent 100%)'}
    }

    // console.log($scope.repos.length);
    setUpLook(7);
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
