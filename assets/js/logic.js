var service;
var infowindow;
var geocoder;
var address;
var city;
var bars = [];
var barLat;
var barLng;
var darkMapStyle = [{
  elementType: 'geometry',
  stylers: [{
    color: '#242f3e'
  }]
},
{
  elementType: 'labels.text.stroke',
  stylers: [{
    color: '#242f3e'
  }]
},
{
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#746855'
  }]
},
{
  featureType: 'administrative.locality',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#d59563'
  }]
},
{
  featureType: 'poi',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#d59563'
  }]
},
{
  featureType: 'poi.park',
  elementType: 'geometry',
  stylers: [{
    color: '#263c3f'
  }]
},
{
  featureType: 'poi.park',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#6b9a76'
  }]
},
{
  featureType: 'road',
  elementType: 'geometry',
  stylers: [{
    color: '#38414e'
  }]
},
{
  featureType: 'road',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#212a37'
  }]
},
{
  featureType: 'road',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#9ca5b3'
  }]
},
{
  featureType: 'road.highway',
  elementType: 'geometry',
  stylers: [{
    color: '#746855'
  }]
},
{
  featureType: 'road.highway',
  elementType: 'geometry.stroke',
  stylers: [{
    color: '#1f2835'
  }]
},
{
  featureType: 'road.highway',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#f3d19c'
  }]
},
{
  featureType: 'transit',
  elementType: 'geometry',
  stylers: [{
    color: '#2f3948'
  }]
},
{
  featureType: 'transit.station',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#d59563'
  }]
},
{
  featureType: 'water',
  elementType: 'geometry',
  stylers: [{
    color: '#17263c'
  }]
},
{
  featureType: 'water',
  elementType: 'labels.text.fill',
  stylers: [{
    color: '#515c6d'
  }]
},
{
  featureType: 'water',
  elementType: 'labels.text.stroke',
  stylers: [{
    color: '#17263c'
  }]
}

];


function initMap() {

  // San Diego Map
  var mapCenter1 = new google.maps.LatLng(32.7157, -117.1611);
  map1 = new google.maps.Map(document.getElementById('map1'), {
    center: mapCenter1,
    zoom: 11,
    //added map's night theme.
    styles: darkMapStyle,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.TOP_LEFT
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT
    },
    fullscreenControl: true,
  });
  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/San+Diego&s=json",
      method: "get"
    }).then(function (response1) {
      bars = response1;
    }).then(function () {
      for (i = 0; i < bars.length; i++) {
        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;
        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {
          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          console.log(bars[tempI]);
          var contentString =
            "<div id='content'><p><strong>" +
            bars[tempI].name +
            "<br>" +
            "Address: " +
            bars[tempI].street +
            "</strong><br>" +
            "<a href=" +
            bars[tempI].reviewlink +
            " target='_blank'>|REVIEW|</a>" +
            "<br>" +
            "<a href=https://" +
            bars[tempI].url +
            " target='_blank'> |WEBSITE| </a><br></p></div>";
          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map1
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });
  }, 500);



  // Philadelphia Map
  var mapCenter2 = new google.maps.LatLng(39.9526, -75.1652);
  map2 = new google.maps.Map(document.getElementById('map2'), {
    center: mapCenter2,
    zoom: 11,
    styles: darkMapStyle,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    fullscreenControl: true,

  });

  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/Philadelphia&s=json",
      method: "get"
    }).then(function (response1) {

      bars = response1;

    }).then(function () {

      for (i = 0; i < bars.length; i++) {

        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;

        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {

          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          var contentString =
          "<div id='content'><p><strong>" +
          bars[tempI].name +
          "<br>" +
          "Address: " +
          bars[tempI].street +
          "</strong><br>" +
          "<a href=" +
          bars[tempI].reviewlink +
          " target='_blank'>|REVIEW|</a>" +
          "<br>" +
          "<a href=https://" +
          bars[tempI].url +
          " target='_blank'> |WEBSITE| </a><br></p></div>";

          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map2
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });

  }, 1000);


  // Denver Map
  var mapCenter3 = new google.maps.LatLng(39.7392, -104.9903);
  map3 = new google.maps.Map(document.getElementById('map3'), {
    center: mapCenter3,
    zoom: 11,
    styles: darkMapStyle,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    fullscreenControl: true,
  });

  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/Denver&s=json",
      method: "get"
    }).then(function (response1) {

      bars = response1;

    }).then(function () {

      for (i = 0; i < bars.length; i++) {

        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;

        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {

          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          var contentString =
          "<div id='content'><p><strong>" +
          bars[tempI].name +
          "<br>" +
          "Address: " +
          bars[tempI].street +
          "</strong><br>" +
          "<a href=" +
          bars[tempI].reviewlink +
          " target='_blank'>|REVIEW|</a>" +
          "<br>" +
          "<a href=https://" +
          bars[tempI].url +
          " target='_blank'> |WEBSITE| </a><br></p></div>";
          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map3
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });
  }, 1500);



  // Portland Map
  var mapCenter4 = new google.maps.LatLng(45.5122, -122.6587);
  map4 = new google.maps.Map(document.getElementById('map4'), {
    center: mapCenter4,
    zoom: 11,
    styles: darkMapStyle,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    fullscreenControl: true,
  });

  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/Portland&s=json",
      method: "get"
    }).then(function (response1) {

      bars = response1;

    }).then(function () {

      for (i = 0; i < bars.length; i++) {

        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;

        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {
          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          var contentString =
            "<div id='content'><p><strong>" +
            bars[tempI].name +
            "<br>" +
            "rating: " +
            bars[tempI].overall +
            "</strong><br>" +
            "<a href=" +
            bars[tempI].reviewlink +
            ">|REVIEW|</a>" +
            "<br>" +
            "<a href=https://" +
            bars[tempI].url +
            " target='_blank'> |WEBSITE| </a><br></p></div>";

          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map4
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });
  }, 2000);


  // Boston Map
  var mapCenter5 = new google.maps.LatLng(42.3601, -71.0589);
  map5 = new google.maps.Map(document.getElementById('map5'), {
    center: mapCenter5,
    zoom: 11,
    styles: darkMapStyle,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    fullscreenControl: true,
  });

  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/Boston&s=json",
      method: "get"
    }).then(function (response1) {
      bars = response1;

    }).then(function () {

      for (i = 0; i < bars.length; i++) {

        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;

        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {

          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          var contentString =
            "<div id='content'><p><strong>" +
            bars[tempI].name +
            "<br>" +
            "rating: " +
            bars[tempI].overall +
            "</strong><br>" +
            "<a href=" +
            bars[tempI].reviewlink +
            " target='_blank'>|REVIEW|</a>" +
            "<br>" +
            "<a href=https://" +
            bars[tempI].url +
            " target='_blank'> |WEBSITE| </a><br></p></div>";
          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map5
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });
  }, 2500);

  // Seattle Map
  var mapCenter6 = new google.maps.LatLng(47.6062, -122.3321);
  map6 = new google.maps.Map(document.getElementById('map6'), {
    center: mapCenter6,
    zoom: 11,
    styles: darkMapStyle,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    fullscreenControl: true,
  });

  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/Seattle&s=json",
      method: "get"
    }).then(function (response1) {

      bars = response1;

    }).then(function () {

      for (i = 0; i < bars.length; i++) {

        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;

        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {

          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          var contentString =
            "<div id='content'><p><strong>" +
            bars[tempI].name +
            "<br>" +
            "rating: " +
            bars[tempI].overall +
            "</strong><br>" +
            "<a href=" +
            bars[tempI].reviewlink +
            " target='_blank'>|REVIEW|</a>" +
            "<br>" +
            "<a href=https://" +
            bars[tempI].url +
            " target='_blank'> |WEBSITE| </a><br></p></div>";

          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map6
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });
  }, 3000);

  // Kansas City Map
  var mapCenter7 = new google.maps.LatLng(39.0997, -94.5786);
  map7 = new google.maps.Map(document.getElementById('map7'), {
    center: mapCenter7,
    zoom: 11,
    styles: darkMapStyle,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    fullscreenControl: true,
  });

  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/Kansas+City&s=json",
      method: "get"
    }).then(function (response1) {

      bars = response1;

    }).then(function () {

      for (i = 0; i < bars.length; i++) {

        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;

        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {

          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          var contentString =
            "<div id='content'><p><strong>" +
            bars[tempI].name +
            "<br>" +
            "rating: " +
            bars[tempI].overall +
            "</strong><br>" +
            "<a href=" +
            bars[tempI].reviewlink +
            " target='_blank'>|REVIEW|</a>" +
            "<br>" +
            "<a href=https://" +
            bars[tempI].url +
            " target='_blank'> |WEBSITE| </a><br></p></div>";
          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map7
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });
  }, 3500);

  // Raleigh Map
  var mapCenter8 = new google.maps.LatLng(35.7796, -78.6382);
  map8 = new google.maps.Map(document.getElementById('map8'), {
    center: mapCenter8,
    zoom: 11,
    styles: darkMapStyle,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    fullscreenControl: true,
  });
  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/Raleigh&s=json",
      method: "get"
    }).then(function (response1) {

      bars = response1;

    }).then(function () {

      for (i = 0; i < bars.length; i++) {

        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;

        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {

          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          var contentString =
            "<div id='content'><p><strong>" +
            bars[tempI].name +
            "<br>" +
            "rating: " +
            bars[tempI].overall +
            "</strong><br>" +
            "<a href=" +
            bars[tempI].reviewlink +
            " target='_blank'>|REVIEW|</a>" +
            "<br>" +
            "<a href=https://" +
            bars[tempI].url +
            " target='_blank'> |WEBSITE| </a><br></p></div>";

          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map8
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });
  }, 4000);


  // Milwaukee Map
  var mapCenter9 = new google.maps.LatLng(43.0389, -87.9065);
  map9 = new google.maps.Map(document.getElementById('map9'), {
    center: mapCenter9,
    zoom: 11,
    styles: darkMapStyle,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    fullscreenControl: true,
  });
  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/Milwaukee&s=json",
      method: "get"
    }).then(function (response1) {

      bars = response1;

    }).then(function () {

      for (i = 0; i < bars.length; i++) {

        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;

        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {

          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          var contentString =
            "<div id='content'><p><strong>" +
            bars[tempI].name +
            "<br>" +
            "rating: " +
            bars[tempI].overall +
            "</strong><br>" +
            "<a href=" +
            bars[tempI].reviewlink +
            " target='_blank'>|REVIEW|</a>" +
            "<br>" +
            "<a href=https://" +
            bars[tempI].url +
            " target='_blank'> |WEBSITE| </a><br></p></div>";

          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map9
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });
  }, 4500);

  // New York Map
  var mapCenter10 = new google.maps.LatLng(40.7128, -74.0060);
  map10 = new google.maps.Map(document.getElementById('map10'), {
    center: mapCenter10,
    zoom: 11,
    styles: darkMapStyle,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    fullscreenControl: true,
  });

  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/New+York&s=json",
      method: "get"
    }).then(function (response1) {

      bars = response1;

    }).then(function () {

      for (i = 0; i < bars.length; i++) {

        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;

        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {

          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          var contentString =
            "<div id='content'><p><strong>" +
            bars[tempI].name +
            "<br>" +
            "rating: " +
            bars[tempI].overall +
            "</strong><br>" +
            "<a href=" +
            bars[tempI].reviewlink +
            " target='_blank'>|REVIEW|</a>" +
            "<br>" +
            "<a href=https://" +
            bars[tempI].url +
            " target='_blank'> |WEBSITE| </a><br></p></div>";
          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map10
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });
  }, 5000);

  // San Francisco Map
  var mapCenter11 = new google.maps.LatLng(37.7749, -122.4194);
  map11 = new google.maps.Map(document.getElementById('map11'), {
    center: mapCenter11,
    zoom: 11,
    styles: darkMapStyle,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    fullscreenControl: true,
  });

  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/San+Francisco&s=json",
      method: "get"
    }).then(function (response1) {

      bars = response1;

    }).then(function () {

      for (i = 0; i < bars.length; i++) {

        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;

        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {

          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          var contentString =
            "<div id='content'><p><strong>" +
            bars[tempI].name +
            "<br>" +
            "rating: " +
            bars[tempI].overall +
            "</strong><br>" +
            "<a href=" +
            bars[tempI].reviewlink +
            " target='_blank'>|REVIEW|</a>" +
            "<br>" +
            "<a href=https://" +
            bars[tempI].url +
            " target='_blank'> |WEBSITE| </a><br></p></div>";
          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map11
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });
  }, 5500);


  // Chicago Map
  var mapCenter12 = new google.maps.LatLng(41.8781, -87.6298);
  map12 = new google.maps.Map(document.getElementById('map12'), {
    center: mapCenter12,
    zoom: 11,
    styles: darkMapStyle,

    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT
    },
    fullscreenControl: true,
  });

  setTimeout(function () {
    $.ajax({
      url: "https://beermapping.com/webservice/loccity/a75f6148bb9e67fc48410cb0be9bfe50/Chicago&s=json",
      method: "get"
    }).then(function (response1) {
      bars = response1;

    }).then(function () {

      for (i = 0; i < bars.length; i++) {

        var tempAddress = bars[i].street + ", " + bars[i].city;
        var tempI = 0;

        $.ajax({
          url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA_y6oBbAUYyXY4weFYWZ4iY5SzYTv72gw&address=" + tempAddress,
          method: "get"
        }).then(function (response2) {

          var tempLat = response2.results[0].geometry.location.lat;
          var tempLng = response2.results[0].geometry.location.lng;
          var contentString =
            "<div id='content'><p><strong>" +
            bars[tempI].name +
            "<br>" +
            "rating: " +
            bars[tempI].overall +
            "</strong><br>" +
            "<a href=" +
            bars[tempI].reviewlink +
            " target='_blank'>|REVIEW|</a>" +
            "<br>" +
            "<a href=https://" +
            bars[tempI].url +
            " target='_blank'> |WEBSITE| </a><br></p></div>";

          var marker = new google.maps.Marker({
            position: {
              lat: tempLat,
              lng: tempLng
            },
            map: map12
          });

          marker.addListener('click', function () {
            $(".poptrox-popup").find("p").html(contentString);
          });

          tempI++;

        });
      }
    });
  }, 6000);
};

$(".thumb").on("click", function () {
  $(this).find(".map").css("position", "initial").appendTo($(".poptrox-popup"));
  $(".poptrox-popup").css("overflow", "hidden");

});

$(".poptrox-popup .closer").on("click", function () {

  $(".poptrox-popup #map1").prependTo($("#thumb1"));
  $(".poptrox-popup #map2").prependTo($("#thumb2"));
  $(".poptrox-popup #map3").prependTo($("#thumb3"));
  $(".poptrox-popup #map4").prependTo($("#thumb4"));
  $(".poptrox-popup #map5").prependTo($("#thumb5"));
  $(".poptrox-popup #map6").prependTo($("#thumb6"));
  $(".poptrox-popup #map7").prependTo($("#thumb7"));
  $(".poptrox-popup #map8").prependTo($("#thumb8"));
  $(".poptrox-popup #map9").prependTo($("#thumb9"));
  $(".poptrox-popup #map10").prependTo($("#thumb10"));
  $(".poptrox-popup #map11").prependTo($("#thumb11"));
  $(".poptrox-popup #map12").prependTo($("#thumb12"));
});