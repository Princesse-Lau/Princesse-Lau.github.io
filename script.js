document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});



var map = L.map('map').setView([48.836961, 2.536974], 13);

// Ajoute une couche de tuiles (carte de base)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
                
// Ajoute un marqueur à l'emplacement spécifié
L.marker([48.836961, 2.536974]).addTo(map);



const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.toggle('large');
  });
});
