var map;
var service;
var infowindow;
var geocoder;
var address = "Alabama";

window.onload = function () {

    $.ajax({
        url: "http://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/santa+monica,ca&s=json",
        method: "get"
    }).then(function (response) {
        console.log(response);


    });
};



function initMap() {
    var mapCenter = new google.maps.LatLng(34, -118.5);

    map = new google.maps.Map(document.getElementById('map'), {
        center: mapCenter,
        zoom: 12
    });

    geocoder = new google.maps.Geocoder();
    codeAddress(geocoder, map);

    function codeAddress(geocoder, map) {
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        })};

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        var request = {
            query: '',
            fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
        };

        service = new google.maps.places.PlacesService(map);
        service.findPlaceFromQuery(request, callback);



        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    //  createMarker(results[i]);
                }
            }
        }




    }



