var service;
var infowindow;
var geocoder;
var address = "UCLA";

$.ajax({
    url: "http://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/santa+monica,ca&s=json",
    method: "get"
}).then(function (response) {
    console.log(response);

});


function initMap() {
    var mapCenter1 = new google.maps.LatLng(34, -118.5);
    map = new google.maps.Map(document.getElementById('map1'), {
        center: mapCenter1,
        zoom: 12
    });

};

$(".thumb").on("click", function () {
    console.log("thumb was clicked");
    $(this).find(".map").css( "position", "initial" ).prependTo($(".poptrox-popup"));
    $(".poptrox-popup").css("overflow", "hidden");

});


