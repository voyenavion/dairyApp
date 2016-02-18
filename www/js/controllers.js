angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {




  var locale;
  var userPosition = function(position){
    locale = position.coords;
    console.log(locale.latitude)
    console.log(locale.longitude);

    $scope.userLat = locale.latitude;
    $scope.userLong = locale.longitude;


  }

  $scope.userLat;
  $scope.userLong;

  navigator.geolocation.getCurrentPosition(userPosition, error);

  function error(err){
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }


  $scope.settings = {
    enableFriends: false
  };
})

.controller('FeedCtrl', function($scope, $http) {

  $http.get("js/dairyList.json").then(function(resp) {
    console.log('Success', resp);
   var texts = resp.data.texts;
   var farm = {farmName: "Onas Farm", county: "Bucks", city: "Ottsville"};
   var citiesPA = zipcodes.array;


   function Farm(farmName, county, city, lat, long, distanceFromCurrentUser){
     this.farmName = farmName;
     this.county = county;
     this.city = city;
     this.lat = lat;
     this.long = long;
     this.distanceFromCurrentUser = distanceFromCurrentUser;

   }
    var farms = []
   farms.push(farm);
   var farmName1 = null;
   var county1 = null;
   var city1 = null;

   for(var i = 0; i < texts.length; i++){
     if(i % 3 === 0){
       farmName1 = texts[i].R[0]["T"];
     }
     if(i % 3 === 1){
       county1 = texts[i].R[0]["T"];
     }
     if(i % 3 === 2){
       city1 = texts[i].R[0]["T"];

     }

     if(farmName1 != null){
       if(county1 != null){
         if(city1 != null){
           var dairyFarm = new Farm(farmName1, county1, city1, 0, 0, 0);
           var geocoder = new google.maps.Geocoder();
           var address = dairyFarm.city + ", PA";

           geocoder.geocode({address: address}, function(results, status){
             if (status == google.maps.GeocoderStatus.OK) {
               dairyFarm.lat = results[0].geometry.location.lat();
               dairyFarm.long = results[0].geometry.location.lng();
             }
           })
           farms.push(dairyFarm);
           farmName1 = null;
           county1 = null;
           city1 = null;
         }
       }
     }
   }

   for(var i = 0; i < farms.length; i++){

     var farmStr = farms[i].farmName.replace(/%20/g, " ");
     farms[i].farmName = farmStr;
     var cityStr = farms[i].city.replace(/%20/g, " ");
     farms[i].city = cityStr;

     console.log(farms[i]);
   }

    $scope.dairies = farms;

    console.log($scope.dairies.length);

    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })



})




;
