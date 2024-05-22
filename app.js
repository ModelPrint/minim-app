document.getElementById('config-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const url = document.getElementById('url').value;
    const iconFile = document.getElementById('icon').files[0];

    if (iconFile) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const iconUrl = e.target.result;

            localStorage.setItem('minimUrl', url);
            localStorage.setItem('minimIcon', iconUrl);

            alert('Konfiguration gespeichert!');
            showOpen();
        };

        reader.readAsDataURL(iconFile);
    }
});

function showConfig() {
    document.getElementById('config-section').style.display = 'block';
    document.getElementById('open-section').style.display = 'none';
}

function showOpen() {
    document.getElementById('config-section').style.display = 'none';
    document.getElementById('open-section').style.display = 'block';

    const iconContainer = document.getElementById('icon-container');
    iconContainer.innerHTML = '';

    const storedUrl = localStorage.getItem('minimUrl');
    const storedIcon = localStorage.getItem('minimIcon');

    if (storedUrl && storedIcon) {
        const img = document.createElement('img');
        img.src = storedIcon;
        img.alt = 'MINIM Icon';
        img.onclick = function() {
            window.open(storedUrl, '_blank');
        };

        iconContainer.appendChild(img);
    } else {
        iconContainer.textContent = 'Keine Konfiguration gefunden. Bitte zuerst konfigurieren.';
    }
}
