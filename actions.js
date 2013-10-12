// acciones
$(function(){
	document.addEventListener("deviceready", function(){
		navigator.geolocation.getCurrentPosition(function(pos){
			initialize(pos.coords.latitude, pos.coords.longitude);		
		}, function(err){
			
		});alert('Error: '+err.code);
	}, false);
	 
});

function initialize(lat, lon) {
	//Posición del mapa
	var latlng = new google.maps.LatLng(lat, lon);
	var myOptions = {
		zoom: 16,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
	//Marcador
	var marker = new google.maps.Marker({
		position: latlng, 
		map: map, 
		title:"Mi posición"
	});
}