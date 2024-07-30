const Standard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
const StandardAtt = `&copy; <a class="uri" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`

const FranceStyle = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png');
const FranceStyleAtt = `&copy; <a class="uri" href="https://openstreetmap.fr/">OpenStreetMap France</a>,
                        <br>&copy; <a class="uri" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`

const Humanitarian = L.tileLayer('https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png');
const HumanitarianAtt = `&copy; <a class="uri" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,
                        <br>Tiles style by <a class="uri" href="https://www.hotosm.org/">Humanitarian OSM Team</a>,
                        <br>hosted by <a class="uri" href="https://openstreetmap.fr/">OpenStreetMap France</a>`

var baseLayers = {
    "Mapnik (Alapértelmezett)": Standard,
    "Francia OSM (Részletes)": FranceStyle,
    "Humanitárius": Humanitarian
};

var stickerMarkers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
		return L.divIcon({ html: '<b class="leaflet-div-icon-text">' + cluster.getChildCount() + '</b>' });
	}
});
const stickerIcon = L.icon({
    iconUrl: '/icons/sticker.svg',
    iconSize: [40, 40],
    iconAnchor: [0, 40],
    popupAnchor: [20, -20],
    shadowUrl: '/icons/placeholder.png',
    shadowSize: [0, 0],
    shadowAnchor: [0, 0]
})

var partialStickerMarkers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
		return L.divIcon({ html: '<b class="leaflet-div-icon-text">' + cluster.getChildCount() + '</b>' });
	}
});
const partialIcon = L.icon({
    iconUrl: '/icons/stickermono.svg',
    iconSize: [40, 40],
    iconAnchor: [0, 40],
    popupAnchor: [20, -20],
    shadowUrl: '/icons/placeholder.png',
    shadowSize: [0, 0],
    shadowAnchor: [0, 0]
})

var overlayLayers = {
    "Matricák": stickerMarkers,
    "Dokumentálatlan Matricák": partialStickerMarkers
};