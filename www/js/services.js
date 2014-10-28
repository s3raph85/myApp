angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

.factory('GeoLocation', function(){
         return {lat: "777", long: "888"};
        });



/*$('#geo_locate_button').click(function(){
 $('#geo_locate_message').html('Getting current position...');
 navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHighAccuracy: true});
 return false;
 });*/