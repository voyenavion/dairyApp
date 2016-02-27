angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
  


.factory('DairyPopulator', function(){
  var data = {
    "texts": [
      {
        "x": 9.692,
        "y": 2.467,
        "w": 3.854,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "86%20Acres",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 2.472,
        "w": 3.865,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Crawford",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 2.472,
        "w": 4.649,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Saegertown",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 3.4219999999999997,
        "w": 6.891000000000001,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Aaron%20Esh%20Dairy",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 3.426,
        "w": 3.854,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Lancaster",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 3.426,
        "w": 4.041,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Kirkwood",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 4.376,
        "w": 10.986,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Alpine%20Heritage%20Creamery",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 4.38,
        "w": 3.854,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Lancaster",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 4.38,
        "w": 3.3999999999999995,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Paradise",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 5.33,
        "w": 7.037,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Alvin%20J.%20Stoltzfus",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 5.335,
        "w": 3.854,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Lancaster",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 5.335,
        "w": 3.3999999999999995,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Paradise",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 6.285,
        "w": 11.299999999999999,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Amazing%20Acres%20Goat%20Dairy",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 6.289,
        "w": 3.092,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Chester",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 6.289,
        "w": 3.504,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Elverson",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 7.239,
        "w": 7.260000000000002,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Apittehikan%20Farm",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 7.244,
        "w": 2.4050000000000002,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Bucks",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 7.244,
        "w": 7.316000000000001,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Upper%20Black%20Eddy",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 8.194,
        "w": 9.504000000000001,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Apple%20Tree%20Goat%20Dairy",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 8.198,
        "w": 2.858,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Juniata",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 8.198,
        "w": 1.846,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Rich",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 9.148,
        "w": 9.689,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Apple%20Valley%20Creamery",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 9.152,
        "w": 2.7140000000000004,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Adams",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 9.152,
        "w": 4.358,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "East%20Berlin",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 10.102,
        "w": 6.095000000000001,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Ark%20Farm%20%20The",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 10.107,
        "w": 0.712,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Jefferson",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 10.107,
        "w": 4.137,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Brookville",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 11.057,
        "w": 4.945,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "BAD%20Farms",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 11.061,
        "w": 2.247,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Berks",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 11.061,
        "w": 3.8030000000000004,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Kempton",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 12.011,
        "w": 9.003,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Bear%20Meadows%20Farm",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 12.015,
        "w": 2.7379999999999995,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Centre",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 12.015,
        "w": 4.035,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Boalsburg",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 12.965,
        "w": 7.872,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Beiler%20Family%20Farm",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 12.97,
        "w": 2.7379999999999995,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Centre",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 12.97,
        "w": 4.9110000000000005,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Spring%20Mills",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 13.92,
        "w": 9.353,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Ben%20K.%20Stoltzfus%20Dairy",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 13.924,
        "w": 3.854,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Lancaster",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 13.924,
        "w": 5.561999999999999,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Bird-in-Hand",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 14.874,
        "w": 6.020000000000001,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Bethany%20Farm",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 14.879,
        "w": 3.092,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Chester",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 14.879,
        "w": 4.575,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Glenmoore",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 15.829,
        "w": 8.964999999999998,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Beulah%20Land%20Jerseys",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 15.832999999999998,
        "w": 3.5770000000000004,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Lebanon",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 15.832999999999998,
        "w": 4.2250000000000005,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Jonestown",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 16.783,
        "w": 8.111999999999998,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Birchrun%20Hills%20Farm",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 16.787,
        "w": 3.092,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Chester",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 16.787,
        "w": 6.338,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Chester%20Springs",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 9.692,
        "y": 17.737,
        "w": 7.613000000000001,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Birchwood%20Farms",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 41.248,
        "y": 17.742,
        "w": 2.4050000000000002,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Bucks",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      },
      {
        "x": 68.139,
        "y": 17.742,
        "w": 3.9000000000000004,
        "clr": 0,
        "A": "left",
        "R": [
          {
            "T": "Newtown",
            "S": -1,
            "TS": [
              0,
              13,
              0,
              0
            ]
          }
        ]
      }
    ]
  }
  var texts = data.texts;
  var farms = [];
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


  return farms;

})




.service('InfoShare', function(){
  return {}
})


.service('DegreesToRadians', function(){
  Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };
})

;

