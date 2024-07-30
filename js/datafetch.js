fetch('/data/data.json')
    .then(response => response.json())
    .then(data => {
        var entries = 0;
        data.forEach(item => {
            entries++;
            const markerIcon = (item.type === "complete" || item.type === "communityfound") ? stickerIcon : partialIcon;
            const MarkerGroup = item.type === "complete" ? stickerMarkers : partialStickerMarkers;
            const finderinfo = item.type === "communityfound" ? `<p class="communityfound">Készítette, ${item.finder}.</p>` : "";
            let StickerStyle
            if (item.style === "qr") {
                StickerStyle = '/data/styles/qr.webp'
            } else if (item.style === "nothanks") {
                StickerStyle = '/data/styles/nothanks.webp'
            } else if (item.style === "nothanks2") {
                StickerStyle = '/data/styles/nothanks2.webp'
            }
            let popupData = (item.type === "complete" || item.type === "communityfound") ? `
            <div>
                <h3>${item.popup.title}</h3>
                <p class="popupdesc">${item.popup.address}</p>
            </div>
            <div class="image-container">
                <div id="${item.popup.image}" class="spinner center">
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                    <div class="spinner-blade"></div>
                </div>
                <div id="stickerclosed_${item.popup.image}" class="sticker-container" style="display: block;">
                    <img class="pending popupimg" src="${item.popup.image}" width="100%" onload="document.getElementById('${item.popup.image}').remove();this.classList.remove('pending');">
                    <img class="small-stickerimg" src="${StickerStyle}" width="15%" onclick="window.toggleSticker('stickerclosed_${item.popup.image}', 'stickerexpanded_${item.popup.image}')">
                </div>
                <div id="stickerexpanded_${item.popup.image}" class="sticker-container" style="display: none;">
                    <img class="popupimg" src="${StickerStyle}" width="100%">
                    <img class="small-stickerimg" src="${item.popup.image}" width="15%" onclick="window.toggleSticker('stickerclosed_${item.popup.image}', 'stickerexpanded_${item.popup.image}')">
                </div>
            </div>
            ${finderinfo}` : `
            <div>
                <h3>${item.popup.title}</h3>
                <p class="popupdesc">${item.popup.address}</p>
                <div class="missingdata">
                    <img src="/icons/sad.svg">
                    <p class="missinginfo">Ez a matrica nincs dokumentálva,<br>
                    ha megtaláltad, <a class="missinginfo" href="#" onclick="editwarning.style.display = 'block';overlay.style.display = 'block';event.stopPropagation();">jelezd</a>!</p>
                </div>
            </div>
            `;

            var marker = L.marker([item.z, item.x], { icon: markerIcon })
                .bindPopup(popupData);
            MarkerGroup.addLayer(marker);
        });
        console.info(`Found ${entries} entries.`)
        console.info('Hint for the secret one: go up (code not avaiable anymore)')
        console.log('%cDe tE MiT KeReSgÉlSz??? Menj inkább reFilc contributornak, jobb elfoglaltság meglásd. https://github.com/refilc/naplo', 'color: white; font-size: 50px; font-family: sans-serif;')
        document.getElementById('stickernumber').innerText = entries;
    });