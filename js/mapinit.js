var map = L.map('map', { attributionControl: false, minZoom: 6, zoomControl: false }).setView([47.184, 19.509], 8);

L.control.zoom({ position: 'topleft', zoomInText: '<div class="navy-button"><img src="/icons/plus.svg"></div>', zoomOutText: '<div class="navy-button"><img src="/icons/minus.svg"></div>' }).addTo(map);
L.control.attribution({ position: 'bottomright', prefix: false }).addTo(map);

Standard.addTo(map);
document.getElementById('attriblist').innerHTML = StandardAtt;
map.on('overlayadd', function(eventLayer) {
    if (eventLayer.name === 'Matricák') {
        document.querySelector('.matrica').classList.add('matricaon');
    } else if (eventLayer.name === 'Dokumentálatlan Matricák') {
        document.querySelector('.nomatr').classList.add('nomatron');
    }
});
map.on('overlayremove', function(eventLayer) {
    if (eventLayer.name === 'Matricák') {
        document.querySelector('.matrica').classList.remove('matricaon');
    } else if (eventLayer.name === 'Dokumentálatlan Matricák') {
        document.querySelector('.nomatr').classList.remove('nomatron');
    }
});
stickerMarkers.addTo(map);
partialStickerMarkers.addTo(map);

L.control.layers(baseLayers, overlayLayers, { position: 'bottomleft' }).addTo(map);

map.on('baselayerchange', function(eventLayer) {
    window.fireStyleChangeEvent();
    try {
    if (eventLayer.name === 'Mapnik (Alapértelmezett)') {
        document.getElementById('attriblist').innerHTML = StandardAtt;
    } else if (eventLayer.name === 'Francia OSM (Részletes)') {
        document.getElementById('attriblist').innerHTML = FranceStyleAtt;
    } else if (eventLayer.name === 'Humanitárius') {
        document.getElementById('attriblist').innerHTML = HumanitarianAtt;
    }
} catch {
    console.info(':3 i forgor to add div');
    // what
}
});

try {
    L.control.locate({ setView: false }).addTo(map);
} catch {
    console.warn('Location module is not available.');
}

window.fireStyleChangeEvent();
