<script async defer
    src="https://maps.googleapis.com/maps/api/js?key='AIzaSyBAo95iVlUhhQtF-me3CDUPUDG8chTmJAA'&callback=initMap">
    </script>


function initMap(lattitude, longitude) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: lattitude, lng: longitude}
  });
  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;

  document.getElementById('submit').addEventListener('click', function() {
    geocodeLatLng(geocoder, map, infowindow);
  });
}


function geocodeLatLng(geocoder, map, infowindow) {
    var input = document.getElementById('latlng').value;
    var latlngStr = input.split(',', 2);
    var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          map.setZoom(11);
          var marker = new google.maps.Marker({
            position: latlng,
            map: map
          });

          console.log("map");
          console.log(marker);

          infowindow.setContent(results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }

