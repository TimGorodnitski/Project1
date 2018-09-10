var service;
var infowindow;
var geocoder;
var address;
var city = "San Diego";
var bars = [];
var barLat;
var barLng;



function initMap() {

    $.ajax({
        url: "http://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/" + city + "&s=json",
        method: "get"
    }).then(function (response1) {

        console.log(response1);
        bars = response1;
        console.log(response1[0].street);
        address = response1[0].street + ", " + response1[0].city;
        console.log(address);

    }).then(function () {

        // San Diego Map
        var mapCenter1 = new google.maps.LatLng(32.7157, -117.1611);
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: mapCenter1,
            zoom: 12
        });

        // Philadelphia Map
        var mapCenter2 = new google.maps.LatLng(39.9526, -75.1652);
        map2 = new google.maps.Map(document.getElementById('map2'), {
            center: mapCenter2,
            zoom: 12
        });

        // Denver Map
        var mapCenter3 = new google.maps.LatLng(39.7392, -104.9903);
        map3 = new google.maps.Map(document.getElementById('map3'), {
            center: mapCenter3,
            zoom: 12
        });

        // Portland Map
        var mapCenter4 = new google.maps.LatLng(45.5122, -122.6587);
        map4 = new google.maps.Map(document.getElementById('map4'), {
            center: mapCenter4,
            zoom: 12
        });

        // Boston Map
        var mapCenter5 = new google.maps.LatLng(42.3601, -71.0589);
        map5 = new google.maps.Map(document.getElementById('map5'), {
            center: mapCenter5,
            zoom: 12
        });

        // Seattle Map
        var mapCenter6 = new google.maps.LatLng(47.6062, -122.3321);
        map6 = new google.maps.Map(document.getElementById('map6'), {
            center: mapCenter6,
            zoom: 12
        });

        // Kansas City Map
        var mapCenter7 = new google.maps.LatLng(39.0997, -94.5786);
        map7 = new google.maps.Map(document.getElementById('map7'), {
            center: mapCenter7,
            zoom: 12
        });

        // Raleigh Map
        var mapCenter8 = new google.maps.LatLng(35.7796, -78.6382);
        map8 = new google.maps.Map(document.getElementById('map8'), {
            center: mapCenter8,
            zoom: 12
        });

        // Milwaukee Map
        var mapCenter9 = new google.maps.LatLng(43.0389, -87.9065);
        map9 = new google.maps.Map(document.getElementById('map9'), {
            center: mapCenter9,
            zoom: 12
        });

        // New York Map
        var mapCenter10 = new google.maps.LatLng(40.7128, -74.0060);
        map10 = new google.maps.Map(document.getElementById('map10'), {
            center: mapCenter10,
            zoom: 12
        });

        // San Francisco Map
        var mapCenter11 = new google.maps.LatLng(37.7749, -122.4194);
        map11 = new google.maps.Map(document.getElementById('map11'), {
            center: mapCenter11,
            zoom: 12
        });

        // Chicago Map
        var mapCenter12 = new google.maps.LatLng(41.8781, -87.6298);
        map12 = new google.maps.Map(document.getElementById('map12'), {
            center: mapCenter12,
            zoom: 12
        });

        for (i = 0; bars.length; i++) {

            var tempAddress = bars[i].street + ", " + bars[i].city;

            $.ajax({
                url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
                method: "get"
            }).then(function (response2) {

                console.log(response2);
                var tempLat = response2.results[0].geometry.location.lat;
                var tempLng = response2.results[0].geometry.location.lng;
                console.log(tempLat);

                var marker = new google.maps.Marker({
                    position: { lat: tempLat, lng: tempLng },
                    map: map1
                });
            })
        };
    });
};

$(".thumb").on("click", function () {
    $(this).find(".map").css("position", "initial").appendTo($(".poptrox-popup"));
    $(".poptrox-popup").css("overflow", "hidden");

});

