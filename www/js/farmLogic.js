/**
 * Created by shaungould on 2/17/16.
 */


var farms = [{"farmName": "dragonbeard","county": "bucks", "city": "ottsville", "lat": 0, "long": 0},
  {"farmName": "bluefarm","county": "bucks", "city": "peartree", "lat": 0, "long": 0 },
  {"farmName": "simpkinfarm","county": "bucks", "city": "plumsteadville", "lat": 0, "long": 0}]

  var zipcodes = [{"city": "peartree", "lat": 12, "long": 34},
  {"city": "plumsteadville", "lat": 100, "long": 77},
  {"city": "ottsville", "lat": 22, "long": 64}]


/*var zipcodes = $http.get("js/zipcode.json").then(function(reponse) {
  var jsonFile = response.data;
  return jsonFile;

}, function(error){
  console.log("ERROR" + error);
})
*/


var addLatNLong = function(object){
  var findCity = object.city;
  for(var i = 0; i < zipcodes.length; i++){
    if(zipcodes[i].city === findCity){
      object.lat = zipcodes[i].lat;
      object.long = zipcodes[i].long;
      console.log('hello');
    }
  }

}


addLatNLong(farms[0]);



console.log(farms[0]);
