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

    const millisecondsInDay = 1000*3600*24;
    const cardsPerRow = 7;
    $scope.numOfRows = 2;
    $scope.cardsPerRow = cardsPerRow;
    var repoNameCounter = 0;

    if($scope.numOfRows > 2) {
        scrollTo('bottom');
    }

    function scrollTo(direction){
        if(direction === 'top'){
            setTimeout(function(){
                $('html, body').animate({ scrollTop: $('.metricContainer').height()*2}, 3000);
                scrollTo('bottom');
            },10000);
        } else {
            setTimeout(function(){
                $('html, body').animate({ scrollTop: 0 }, 3000);
                scrollTo('top');
            },10000);
        }
    }

    var repo1 = [{name: "api-monitor-mashup", currProc: 68.5, lastProc: 82.72, lastChange: "2018-05-01 13:05:01", lastCommit: "2018-06-23 10:05:00"},
        {name: "apiculturist", currProc: 92.53, lastProc: 91.67, lastChange: "2018-07-09 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "geo-server", currProc: 11.84, lastProc: 11.84, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "sense-client", currProc: 36.72, lastProc: 10.29, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "sense-client/dev-hub", currProc: 45.26, lastProc: 45.26, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "depghraph-service", currProc: 45.68, lastProc: 45.68, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "api-monitor-mashup", currProc: 50.5, lastProc: 82.72, lastChange: "2018-05-01 13:05:01", lastCommit: "2018-06-23 10:05:00"},
        {name: "apiculturist", currProc: 31.53, lastProc: 91.67, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "geo-server", currProc: 11.84, lastProc: 11.84, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "sense-client", currProc: 36.72, lastProc: 36.29, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "sense-client/dev-hub", currProc: 45.26, lastProc: 45.26, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "depghraph-service", currProc: 45.68, lastProc: 45.68, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},];
    var repo2 = [{name: "api-monitor-mashup", currProc: 34.5, lastProc: 53.72, lastChange: "2018-03-01 13:05:01", lastCommit: "2018-06-23 10:05:00"},
        {name: "apiculturist", currProc: 64.53, lastProc: 53.67, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "la-vie", currProc: 2.02, lastProc: 1.15, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "geo-server", currProc: 45.84, lastProc: 53.84, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "sense-client", currProc: 21.72, lastProc: 53.29, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "sense-client/dev-hub", currProc: 34.26, lastProc: 43.26, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "depghraph-service", currProc: 54.68, lastProc: 31.68, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "api-monitor-mashup", currProc: 31.5, lastProc: 4.72, lastChange: "2018-05-01 13:05:01", lastCommit: "2018-06-23 10:05:00"},
        {name: "apiculturist", currProc: 34.53, lastProc: 53.67, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "la-vie", currProc: 13.02, lastProc: 43.15, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "geo-server", currProc: 76.84, lastProc: 13.84, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "sense-client", currProc: 65.72, lastProc: 35.29, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "sense-client/dev-hub", currProc: 42.26, lastProc: 43.26, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
        {name: "depghraph-service", currProc: 54.68, lastProc: 13.68, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},];
    var repo4 =  [ { name: 'api-monitor-mashup',
        currProc: '68.50153',
        lastProc: '82.71605',
        lastCommit: '2018-05-31 14:17:00',
        lastChange: '2018-05-31' },
        { name: 'apiculturist',
            currProc: '90.53472',
            lastProc: '87.66667',
            lastCommit: '2018-07-01 12:55:00',
            lastChange: '2018-07-01' },
        { name: 'asm-backend-service',
            currProc: '56.46446',
            lastProc: '53.54597',
            lastCommit: '2018-01-31 07:54:52',
            lastChange: '2018-02-26' },
        { name: 'asm-badge-service',
            currProc: '58.54597',
            lastProc: '46.68182',
            lastCommit: '2018-02-19 14:38:47',
            lastChange: '2018-02-26' },
        { name: 'asm-on-demand',
            currProc: '46.68182',
            lastProc: '43.28269',
            lastCommit: '2018-01-19 09:27:29',
            lastChange: '2018-02-26' },
        { name: 'asm-released-components',
            currProc: '37.97657',
            lastProc: '28.14216',
            lastCommit: '2018-05-30 10:38:12',
            lastChange: '2018-05-30' },
        { name: 'asm-watch-agent',
            currProc: '68.5541',
            lastProc: '45.67901',
            lastCommit: '2017-10-27 08:03:56',
            lastChange: '2018-02-26' },
        { name: 'depgraph-service',
            currProc: '35.67901',
            lastProc: '81.28942',
            lastCommit: '2018-04-17 14:01:28',
            lastChange: '2018-02-26' },
        { name: 'sense-client/apis',
            currProc: '74.78001',
            lastProc: '74.85117',
            lastCommit: '-',
            lastChange: '2018-06-25' },
        { name: 'sense-client/dev-hub',
            currProc: '45.2627',
            lastProc: '47.28627',
            lastCommit: '-',
            lastChange: '2018-06-25' },
        { name: 'web-extension-service',
            currProc: '90.36709',
            lastProc: '83.43056',
            lastCommit: '2018-06-05 10:10:59',
            lastChange: '2018-02-26' },
        { name: 'wes-cli',
            currProc: '79.43056',
            lastProc: '82.38558',
            lastCommit: '2018-01-18 07:03:26',
            lastChange: '2018-02-25' }
    ]
    var repo3 =  [ { name: 'api-monitor-mashup',
        currProc: '68.50153',
        lastProc: '82.71605',
        lastCommit: '2018-05-31 14:17:00',
        lastChange: '2018-05-31' },
        { name: 'apiculturist',
            currProc: '92.53472',
            lastProc: '91.66667',
            lastCommit: '2018-07-02 12:55:00',
            lastChange: '2018-07-02' },
        { name: 'asm-backend-service',
            currProc: '58.46446',
            lastProc: '73.54597',
            lastCommit: '2018-01-31 07:54:52',
            lastChange: '2018-02-26' },
        { name: 'asm-badge-service',
            currProc: '73.54597',
            lastProc: '45.68182',
            lastCommit: '2018-02-19 14:38:47',
            lastChange: '2018-02-26' },
        { name: 'asm-on-demand',
            currProc: '45.68182',
            lastProc: '41.28269',
            lastCommit: '2018-01-19 09:27:29',
            lastChange: '2018-02-26' },
        { name: 'asm-released-components',
            currProc: '47.97657',
            lastProc: '48.14216',
            lastCommit: '2018-05-30 10:38:12',
            lastChange: '2018-05-30' },
        { name: 'asm-watch-agent',
            currProc: '68.5541',
            lastProc: '45.67901',
            lastCommit: '2017-10-27 08:03:56',
            lastChange: '2018-02-26' },
        { name: 'depgraph-service',
            currProc: '45.67901',
            lastProc: '81.28942',
            lastCommit: '2018-04-17 14:01:28',
            lastChange: '2018-02-26' },
        { name: 'sense-client/apis',
            currProc: '78.78001',
            lastProc: '78.85117',
            lastCommit: '-',
            lastChange: '2018-06-25' },
        { name: 'sense-client/dev-hub',
            currProc: '45.2627',
            lastProc: '45.28627',
            lastCommit: '-',
            lastChange: '2018-06-25' },
        { name: 'web-extension-service',
            currProc: '79.36709',
            lastProc: '77.43056',
            lastCommit: '2018-06-05 10:10:59',
            lastChange: '2018-02-26' },
        { name: 'wes-cli',
            currProc: '77.43056',
            lastProc: '83.38558',
            lastCommit: '2018-01-18 07:03:26',
            lastChange: '2018-07-09' }
    ]



    $scope.repos = repo3;

    $scope.get7Repos = function (index) {
        return $scope.repos.slice(index * cardsPerRow, index * cardsPerRow + cardsPerRow);
    }

    var dates = ['Compared to last change', 'Compared to 2 weeks ago', "Compared to a month ago", "Compared to a quarter ago"];
    var lastArrowDeg = [];
    var datesCounter = 0;
    var lastShadowDeg = [];
    for(var i = 0; i < repo3.length; i++){
        lastShadowDeg.push(0);
        lastArrowDeg.push(-90);
    }

    flipCardAndWeekAnimation()

    function flipCardAndWeekAnimation(index) {
        $('.compareDate').empty();
        $('.compareDate').append('<h1>' + dates[datesCounter % dates.length] + '</h1>');
        $('.compareDate h1').addClass('slideIn');
        setTimeout(function () {
            // $('.metricContainer').addClass('pauseAnimation');
            setTimeout(function () {
                $('.compareDate h1').removeClass('slideIn');
            }, 2000);
            setTimeout(function () {
                // $('.metricContainer').removeClass('pauseAnimation');
                $('.compareDate h1').addClass('foldAway');
                setTimeout(function () {
                    $scope.repos = $scope.repos === repo4 ? repo3 : repo4;
                    // console.log($scope.repos);
                    setUpLook(cardsPerRow);
                    datesCounter++;
                    repoNameCounter = ((repoNameCounter + 1) % 2);
                    flipCardAndWeekAnimation();
                }, 1500);
            }, 15000);
        }, 1500);
    }

    $scope.change = function () {
        $scope.repos = [{name: "api-monitor-mashup", currProc: 50.5, lastProc: 82.72, lastChange: "2018-05-01 13:05:01", lastCommit: "2018-06-23 10:05:00"},
            {name: "apiculturist", currProc: 50.53, lastProc: 91.67, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
            {name: "la-vie", currProc: 50.02, lastProc: 52.15, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
            {name: "geo-server", currProc: 11.84, lastProc: 11.84, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
            {name: "sense-client", currProc: 36.72, lastProc: 36.29, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
            {name: "sense-client/dev-hub", currProc: 45.26, lastProc: 45.26, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
            {name: "depghraph-service", currProc: 45.68, lastProc: 45.68, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
            {name: "api-monitor-mashup", currProc: 68.5, lastProc: 82.72, lastChange: "2018-05-01 13:05:01", lastCommit: "2018-06-23 10:05:00"},
            {name: "apiculturist", currProc: 92.53, lastProc: 91.67, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
            {name: "la-vie", currProc: 54.02, lastProc: 52.15, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
            {name: "geo-server", currProc: 11.84, lastProc: 11.84, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
            {name: "sense-client", currProc: 36.72, lastProc: 36.29, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
            {name: "sense-client/dev-hub", currProc: 45.26, lastProc: 45.26, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},
            {name: "depghraph-service", currProc: 45.68, lastProc: 45.68, lastChange: "2018-04-02 08:00:00", lastCommit: "2018-07-05 16:45:12"},];
        setUpLook(cardsPerRow);
    }


    function setPercentCSS(index) {
        var res = $scope.repos[index].currProc - $scope.repos[index].lastProc;
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
        var shadowDeg = repo.currProc / 100 * 180;
        $.keyframe.define([{
            name: 'animateShadow' + '_' + repoNameCounter + '_' + index,
            '0%': {'transform': 'rotate(' + (lastShadowDeg[index]) + 'deg)'},
            '90%, 100%': {'transform': 'rotate(' + (shadowDeg) + 'deg)'}
        }
        ]);
        lastShadowDeg[index] = shadowDeg;
        $.keyframe.define([{
            name: 'animateArrow' + '_' + repoNameCounter + '_' + index,
            '0%': {'transform': 'rotate(' + (lastArrowDeg[index]) + 'deg)'},
            '10%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * 0.2) + 'deg)'},
            '20%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * -0.2) + 'deg)'},
            '30%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * 0.1) + 'deg)'},
            '40%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * -0.1) + 'deg)'},
            '50%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * -0.05) + 'deg)'},
            '60%': {'transform': 'rotate(' + (arrowDeg + arrowDeg * 0.05) + 'deg)'},
            '100%': {'transform': 'rotate(' + (arrowDeg) + 'deg)'}
        }
        ]);
        lastArrowDeg[index] = arrowDeg;
        $.keyframe.define([{
            name: 'animateArrowWhite' + '_' + repoNameCounter + '_' + index,
            '0%': {'opacity': '0.6', 'transform': 'rotate(' + (-90 + repo.currProc / 100 * 180) + 'deg)'},
            '100%': {'opacity': '0.6', 'transform': 'rotate(' + (-90 + repo.lastProc / 100 * 180) + 'deg)'}
        }
        ]);
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
        $('.changePercent').each(function (index) {
            var diff = $scope.repos[index].currProc - $scope.repos[index].lastProc + "";
            if (diff.charAt(0) !== "-") {
                diff = '+' + diff;
            }
            diff = diff.length < 4 ? diff + '.00' : diff;
            $(this).text(diff.slice(0, 6) + '%')
        });
        $('.latestChange').each(function (index) {
            $(this).text($scope.repos[index].lastChange);
        });
        $('.latestCommit').each(function (index) {
            $(this).text($scope.repos[index].lastCommit);
        });
        $(".daysSincechange").each(function (index){
            var d = new Date($scope.repos[index].lastChange);
            $(this).text(Math.floor((Date.now() - d)/millisecondsInDay));
        });

        $(".metricContainer").each(function (index){
            var d = new Date($scope.repos[index].lastChange);
            var days = (Date.now() - d)/millisecondsInDay;
            var newDays = days > 100 ? 0 : 100 - days;
            var oldOpacity = $(this).find(".row").css('opacity');
            var newOpacity = 0.75 + newDays/100;
            var animationName = 'animateOpacity' + '_' + repoNameCounter + '_' + index;
            $.keyframe.define([{
                name: animationName,
                '0%': {'opacity': oldOpacity},
                '90%, 100%': {'opacity': newOpacity}
            }
            ]);
            console.log(oldOpacity, newOpacity);
            console.log(animationName + ' 1s ease-in-out 0s 1 normal forwards');
            $(this).find(".row").playKeyframe(animationName + ' 1s ease-in-out 0s 1 normal forwards');
            // $(this).find(".row").css('opacity', 0.75 + newDays/100);
        });
        $('.shineText').each(function (index) {
            $(this).css('animation-delay', Math.floor(Math.random() * 30) + 's');
        });
        $('.gradient-pie').each(function (index) {
            $(this).css('animation-delay', Math.floor(Math.random() * 120) + 's');
        });

        $(".pieShadow.black").each(function (index) {
            makeAnimationKeyframes(index)
            // console.log(this, index);
            $(this).playKeyframe(
                'animateShadow' +  '_' + repoNameCounter + '_' + + index + ' 1.5s cubic-bezier(0.3,0,0.2,1) 0s 1 normal forwards'
            );
        });

        $(".arrowBlack").each(function (index) {
            // console.log('animateArrow' +  '_' + repoNameCounter + '_' + + index);
            $(this).playKeyframe(
                'animateArrow' +  '_' + repoNameCounter + '_' + + index + ' 1.5s cubic-bezier(0.3,0,0.2,1) 0s 1 normal forwards'
            );
        });
        $(".arrowWhite").each(function (index) {
            // console.log(this, index);
            $(this).playKeyframe(
                'animateArrowWhite' +  '_' + repoNameCounter + '_' + + index + ' 1.5s cubic-bezier(0.3,0,0.2,1) 1.5s 1 normal forwards'
            );
        });
    }

    var $injector = angular.injector(["ng"]);
    var deferred = $injector.get("$q");

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
            $(this).css('background', 'conic-gradient(transparent ' + startDeg + 'deg,' + color + ' ' + startDeg + 'deg, ' + color + ' ' + stopDeg + 'deg, transparent ' + stopDeg + 'deg)');
        });
        $('.changePercent').each(function (index) {
            $(this).css(setPercentCSS(index));
        });
        $('.metricContainer').each(function (index) {
            $(this).css(getGradientCSS(index));
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
            setUpAnimation();
            setUpCSS();
        });
    }

    function getGradientCSS(index) {
        var diff = $scope.repos[index].currProc - $scope.repos[index].lastProc;
        var color1 = 'transparent';
        var color2 = 'transparent';
        if (diff < -1.0) {
            color1 = 'rgba(220, 20, 60,0.6)';
            color2 = 'rgba(220, 20, 60,0.2)';
        } else if (diff > 1.0) {
            color1 = 'rgba(154, 205, 50,0.6)';
            color2 = 'rgba(154, 205, 50,0.2)';
        }
        return {'background': 'linear-gradient(' + color1 + ',' + color2 + ' 10%, transparent 30%, transparent 100%)'}
    }

    setUpLook(cardsPerRow);
});
