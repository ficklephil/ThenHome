'use strict';

angular.module('thenHomeApp')
    .service('GoogleStaticMapService', function () {

        var GOOGLE_API_STATIC_MAP_URL = 'https://maps.googleapis.com/maps/api/staticmap?';
        var GOOGLE_API_STREETVIEW_URL = 'https://maps.googleapis.com/maps/api/streetview?';

        return {
            getGoogleMapImage : function(lat,lng,height,width){
                return GOOGLE_API_STATIC_MAP_URL + 'center='+lat+','+lng+'&zoom=14&size='+height+'x'+width;
            },

            getGoogleMapStreetViewImage : function(lat,lng,height,width) {
                return GOOGLE_API_STREETVIEW_URL + 'size='+height+'x'+width+'&location=' + lat + ',' + lng;
            }
        }
    });
