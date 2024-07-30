var element = document.querySelector('.leaflet-control-layers-list');
element.insertAdjacentHTML('afterbegin', '<h1 class="settingsheader">Beállítások</h1>');

var baseLayers = document.querySelectorAll('.leaflet-control-layers-base label');
var overlays = document.querySelectorAll('.leaflet-control-layers-overlays label');

var overlay1 = document.querySelector('.leaflet-control-layers-overlays label:nth-child(1)');
overlay1.classList.add('matrica');
document.querySelector('.matrica').classList.add('matricaon');
var overlay2 = document.querySelector('.leaflet-control-layers-overlays label:nth-child(2)');
overlay2.classList.add('nomatr');
document.querySelector('.nomatr').classList.add('nomatron');

function toggleSticker(stickerClosed, stickerExpanded) {
  var sticclos = document.getElementById(stickerClosed);
  var sticcexp = document.getElementById(stickerExpanded);
  sticclos.style.display = (sticclos.style.display == 'none') ? 'block' : 'none';
  sticcexp.style.display = (sticcexp.style.display == 'none') ? 'block' : 'none';
}

baseLayers.forEach(function (element) {
  element.classList.add('baselayerstyle');
});

overlays.forEach(function (element) {
  element.classList.add('overlaystyle');
});

var sep = document.querySelector('.leaflet-control-layers-separator');
sep.remove();

window.toggleSticker = toggleSticker;