document.addEventListener('DOMContentLoaded', function() {
    fetch('https://rss.app/feeds/0Az8vJ69zfkLHfOe.xml')  // URL del feed RSS
    .then(response => response.text())
    .then(data => {
        // Parsear el feed RSS y extraer las imágenes
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const items = xmlDoc.getElementsByTagName('item');
        const widget = document.getElementById('instagram-widget');

        Array.from(items).forEach(item => {
            const img = document.createElement('img');
            const mediaContent = item.getElementsByTagName('media:content')[0];
            if (mediaContent) {
                const imageUrl = mediaContent.getAttribute('url');
                img.src = imageUrl;
                img.alt = item.getElementsByTagName('title')[0].textContent;
                widget.appendChild(img);
            }
        });
    })
    .catch(error => console.error('Error fetching RSS feed:', error));
});