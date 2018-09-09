var service;
var infowindow;
var geocoder;
var address;

$.ajax({
    url: "http://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/santa+monica,ca&s=json",
    method: "get"
}).then(function (response) {
    console.log(response);

});

// San Diego Map
function initMap() {
    var mapCenter1 = new google.maps.LatLng(32.7157, -117.1611);
    map = new google.maps.Map(document.getElementById('map1'), {
        center: mapCenter1,
        zoom: 12
    });


    // Philadelphia Map
    var mapCenter2 = new google.maps.LatLng(39.9526, -75.1652);
    map = new google.maps.Map(document.getElementById('map2'), {
        center: mapCenter2,
        zoom: 12
    });

    // Denver Map
    var mapCenter3 = new google.maps.LatLng(39.7392, -104.9903);
    map = new google.maps.Map(document.getElementById('map3'), {
        center: mapCenter3,
        zoom: 12
    });

    // Portland Map
    var mapCenter4 = new google.maps.LatLng(45.5122, -122.6587);
    map = new google.maps.Map(document.getElementById('map4'), {
        center: mapCenter4,
        zoom: 12
    });

    // Boston Map
    var mapCenter5 = new google.maps.LatLng(42.3601, -71.0589);
    map = new google.maps.Map(document.getElementById('map5'), {
        center: mapCenter5,
        zoom: 12
    });

    // Seattle Map
    var mapCenter6 = new google.maps.LatLng(47.6062, -122.3321);
    map = new google.maps.Map(document.getElementById('map6'), {
        center: mapCenter6,
        zoom: 12
    });

    // Kansas City Map
    var mapCenter7 = new google.maps.LatLng(39.0997, -94.5786);
    map = new google.maps.Map(document.getElementById('map7'), {
        center: mapCenter7,
        zoom: 12
    });

    // Raleigh Map
    var mapCenter8 = new google.maps.LatLng(35.7796, -78.6382);
    map = new google.maps.Map(document.getElementById('map8'), {
        center: mapCenter8,
        zoom: 12
    });

    // Milwaukee Map
    var mapCenter9 = new google.maps.LatLng(43.0389, -87.9065);
    map = new google.maps.Map(document.getElementById('map9'), {
        center: mapCenter9,
        zoom: 12
    });

    // New York Map
    var mapCenter10 = new google.maps.LatLng(40.7128, -74.0060);
    map = new google.maps.Map(document.getElementById('map10'), {
        center: mapCenter10,
        zoom: 12
    });

    // San Francisco Map
    var mapCenter11 = new google.maps.LatLng(37.7749, -122.4194);
    map = new google.maps.Map(document.getElementById('map11'), {
        center: mapCenter11,
        zoom: 12
    });

    // Chicago Map
    var mapCenter12 = new google.maps.LatLng(41.8781, -87.6298);
    map = new google.maps.Map(document.getElementById('map12'), {
        center: mapCenter12,
        zoom: 12
    });

};

$(".thumb").on("click", function () {
    $(this).find(".map").css("position", "initial").appendTo($(".poptrox-popup"));
    $(".poptrox-popup").css("overflow", "hidden");
});


