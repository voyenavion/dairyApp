angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope, InfoShare) {
    $scope.dairies = InfoShare.dairies;
    $scope.nearDairies = [];

    var locale;

    ionic.Platform.ready(function () {


      var userPosition = function (position) {
        locale = position.coords;
        $scope.userLat = locale.latitude;
        $scope.userLong = locale.longitude;

        $scope.nearDairies = findMatches();




      }

      $scope.userLat;
      $scope.userLong;
      navigator.geolocation.getCurrentPosition(userPosition, error);

      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      }
    });

    function convert2Radians (degrees) {
      return degrees * Math.PI / 180;
    };

    function calcDistanceMiles(lat1, lon1, lat2, lon2) {
      var R = 3959; // Radius of the earth in miles
      var dLat = convert2Radians(lat2 - lat1);  //
      var dLon = convert2Radians(lon2 - lon1);
      var a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos((lat1)) * Math.cos(lat2) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in miles
      return d;
      console.log(d);
    }

    $scope.searchWithin = 500;

    var nearDairies = [];
    var searchWithin = $scope.searchWithin;

    function findMatches() {
      var arrayLength = $scope.dairies;
      console.log(arrayLength);
      for (var i = 0; i < arrayLength; i++) {
        var dairy = $scope.dairies[i];
        calcDistanceMiles(dairy.lat, dairy.long, $scope.userLat, $scope.userLong);
        if (d <= $scope.searchWithin) {
          nearDairies.push(dairy);
        }
      }
      return nearDairies;

    }

    console.log(findMatches())

    $scope.settings = {
      enableFriends: false
    };
  })

  .controller('FeedCtrl', function ($scope, $http, InfoShare, DairyPopulator) {
    var farms = [];
    $scope.dairies = DairyPopulator;

    var dairiesLength = $scope.dairies.length;
    console.log(dairiesLength);
    for (var i = 0; i < 10; i++) {
      getLatLng(i);
    }

    for (var i = 10; i < dairiesLength; i++) {
      getLatLng(i);
    }


    function getLatLng(index) {
      var geocoder = new google.maps.Geocoder();
      var address = $scope.dairies[index].city + ", PA";
      geocoder.geocode({address: address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          $scope.dairies[index].lat = results[0].geometry.location.lat();
          $scope.dairies[index].long = results[0].geometry.location.lng();
        } else {
          console.error("didn't work this time");
        }
      })
    }
  })


;
