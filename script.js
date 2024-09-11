document.addEventListener('DOMContentLoaded', function() {
    function fetchAndUpdateFeed() {
        fetch('https://rss.app/feeds/0Az8vJ69zfkLHfOe.xml')  // URL del feed RSS
        .then(response => response.text())
        .then(data => {
            // Limpiar el contenido actual del widget
            const widget = document.getElementById('instagram-widget');
            widget.innerHTML = '';

            // Parsear el feed RSS y extraer las imágenes
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const items = xmlDoc.getElementsByTagName('item');

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
    }

    // Fetch and update feed initially
    fetchAndUpdateFeed();

    // Set an interval to fetch and update feed every 30 minutes
    setInterval(fetchAndUpdateFeed, 30 * 60 * 1000);  // 30 minutes in milliseconds
});