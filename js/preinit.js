function fireStyleChangeEvent() {
    var baseLayers = document.querySelectorAll('.leaflet-control-layers-base label');

    baseLayers.forEach(function (element) {
        element.classList.remove('selectedbaselayerstyle');
        element.classList.add('baselayerstyle');
    });

    var selectedBaseLayerInput = document.querySelector('input.leaflet-control-layers-selector:checked');
    if (selectedBaseLayerInput) {
        var parentSpan = selectedBaseLayerInput.parentElement.parentElement;
        parentSpan.classList.remove('baselayerstyle')
        parentSpan.classList.add('selectedbaselayerstyle');
    }
}

// Fuck this shit, all css has hardcoded variables

/*function loadCSS(filename) {
    var link = document.createElement("link");
    link.href = filename;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
}

function getUserColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        loadCSS('/css/var/dark.css');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        loadCSS('/css/var/light.css');
    } else {
        loadCSS('/css/var/light.css');
    }
}

window.loadCSS = loadCSS;
window.getUserColorScheme = getUserColorScheme;*/

// i forgor this was there

window.fireStyleChangeEvent = fireStyleChangeEvent;
