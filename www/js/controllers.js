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

  .controller('AccountCtrl', function ($scope) {
    var locale;

    ionic.Platform.ready(function () {


      var userPosition = function (position) {
        locale = position.coords;
        $scope.userLat = locale.latitude;
        $scope.userLong = locale.longitude;




      }

      $scope.userLat;
      $scope.userLong;
      navigator.geolocation.getCurrentPosition(userPosition, error);

      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      }
    });


    function calcDistanceMiles(lat1, lon1, lat2, lon2) {
      var R = 3959; // Radius of the earth in miles
      var dLat = (lat2 - lat1);  // deg2rad below
      var dLon = (lon2 - lon1);
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

  .controller('FeedCtrl', function ($scope, $http) {
    var farms = [];
    $scope.dairies = farms;


    $http.get("js/dairyList.json").then(function (resp) {
      console.log('Success', resp);
      var texts = resp.data.texts;
      var citiesPA = zipcodes.array;


      function Farm(farmName, county, city, lat, long, distanceFromCurrentUser) {
        this.farmName = farmName;
        this.county = county;
        this.city = city;
        this.lat = lat;
        this.long = long;
        this.distanceFromCurrentUser = distanceFromCurrentUser;

      }

      var farmName1 = null;
      var county1 = null;
      var city1 = null;

      for (var i = 0; i < texts.length; i++) {
        if (i % 3 === 0) {
          farmName1 = texts[i].R[0]["T"];
        }
        if (i % 3 === 1) {
          county1 = texts[i].R[0]["T"];
        }
        if (i % 3 === 2) {
          city1 = texts[i].R[0]["T"];

        }

        if (farmName1 != null) {
          if (county1 != null) {
            if (city1 != null) {
              var dairyFarm = new Farm(farmName1, county1, city1, 0, 0, 0);

              farms.push(dairyFarm);
              farmName1 = null;
              county1 = null;
              city1 = null;
            }
          }
        }
      }

      for (var i = 0; i < farms.length; i++) {

        var farmStr = farms[i].farmName.replace(/%20/g, " ");
        farms[i].farmName = farmStr;
        var cityStr = farms[i].city.replace(/%20/g, " ");
        farms[i].city = cityStr;

        console.log(farms[i]);
      }

      //$scope.dairies = farms;
      var dairiesLength = $scope.dairies.length;
      console.log(dairiesLength);
      for (var i = 0; i < 10; i++) {
        getLatLng(i);
      }

      for (var i = 10; i < dairiesLength; i++) {
        getLatLng(i);
      }



        // For JSON responses, resp.data contains the result
    }, function (err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })

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
