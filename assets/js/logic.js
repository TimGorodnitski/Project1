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
};

$(".thumb").on("click", function () {
    $(this).find(".map").css("position", "initial").prependTo($(".poptrox-popup"));
    $(".poptrox-popup").css("overflow", "hidden");
});


