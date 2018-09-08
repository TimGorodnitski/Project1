var map;
var service;
var infowindow;
var geocoder;
var address = "UCLA";

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





}



