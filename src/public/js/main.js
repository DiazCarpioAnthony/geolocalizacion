const socket = io();


var neighborhoods = [
	{
		index: 0, lat: -12.062283, lng: -76.994354, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Evento 1</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 1, lat: -12.060261, lng: -76.993825, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Evento 2</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 2, lat: -12.060911, lng: -76.997097, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Evento 3</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 3, lat: -12.061614, lng: -76.993181, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Evento 4</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>'
	},
	{
		index: 4, lat: -12.063639, lng: -76.994222, content: '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Evento 5</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
			'sandstone rock formation in the southern part of the ' +
			'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
			'south west of the nearest large town, Alice Springs; 450&#160;km ' +
			'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
			'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
			'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
			'Aboriginal people of the area. It has many springs, waterholes, ' +
			'rock caves and ancient paintings. Uluru is listed as a World ' +
			'Heritage Site.</p>' +
			'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
			'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
			'(last visited June 22, 2009).</p>' +
			'</div>' +
			'</div>'
	}
];

var markers = [];
var map;
var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

function initMap() {

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			const positionActual = position.coords;

			/*===================== Ubicamos el mapa con centro en la ubicacion actual =====================*/
			map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				center: { lat: positionActual.latitude, lng: positionActual.longitude }
			});

			/*===================== Creamos el marcador de la ubicacion actual =====================*/
			crearMarcador(positionActual);

			socket.emit('userCoordinates', {
				latitude: positionActual.latitude,
				longitude: positionActual.longitude
			}); //Eviamos las coordenas del nuevo usuario conectado

			socket.on('newUserCoordinates', coordsNew => {
				//Crear el marcador
				// Primero en tiempo real porque lo otro seria solo agregar en el array y con el drop
				new google.maps.Marker({
					position: { lat: coordsNew.latitude + 1, lng: coordsNew.longitude + 0.1 },
					map: map,
					title: 'Nueva ubicacion'
				}).addListener('click');
			});

		}, function () {
		});
	} else {
	}
}

function crearMarcador(positionActual) {
	var myUbicacionMarker = new google.maps.Marker({
		position: { lat: positionActual.latitude, lng: positionActual.longitude },
		map: map,
		title: 'Mi ubicacion'
	}).addListener('click', function () {
		var contentPopUp = '<div id="content">' +
			'<div id="siteNotice">' +
			'</div>' +
			'<h1 id="firstHeading" class="firstHeading">Ubicacion Actual</h1>' +
			'<div id="bodyContent">' +
			'<p><b>Hola, Anthony</b>, Esta es tu ubicación actual' +
			'<br>disfruta de los eventos cercanos a ti.</p>' +
			'(Last visited Setiembre 20, 2019).</p>' +
			'</div>' +
			'</div>';
		new google.maps.InfoWindow({
			content: contentPopUp
		}).open(map, this);
	});
}

function drop() {
	clearMarkers();
	for (var i = 0; i < neighborhoods.length; i++) {
		addMarkerWithTimeout(neighborhoods[i], i * 200);
	}
}

function addMarkerWithTimeout(neighborhood, timeout) {

	window.setTimeout(function () {
		markers.push(
			new google.maps.Marker({
				position: neighborhood,
				map: map,
				animation: google.maps.Animation.DROP,
				icon: image,
				title: 'Evento '
			}).addListener('click', detalles)
			/*.addListener('click', function () { // Causa problemas con el efecto drop
				var infowindow = new google.maps.InfoWindow({
					content: neighborhood['content']
				});
				infowindow.open(map, this);
			})*/
			);

	}, timeout);
}

function detalles(){
	alert("Hola");
}

function clearMarkers() {
	for (var i = 0; i < markers.length; i++) {
		google.maps.event.clearInstanceListeners(markers[i]);
		markers[i].setMap(null);

	}
	markers = [];
}