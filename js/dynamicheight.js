window.addEventListener('resize', function () {
    document.getElementById('map').style.height = window.innerHeight + 'px';
});

window.dispatchEvent(new Event('resize'));

// ha megy hát megy
