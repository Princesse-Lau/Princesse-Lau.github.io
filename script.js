document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
  const transitionLinks = document.getElementsByClassName('page-transition');

  for (let i = 0; i < transitionLinks.length; i++) {
    transitionLinks[i].addEventListener('click', function(event) {
      event.preventDefault();
      const destinationUrl = this.href;

      document.body.classList.add('fade-out');
      setTimeout(function() {
        window.location.href = destinationUrl;
      }, 300); // 300ms, correspondant à la durée de la transition CSS
    });
  }
});

function copyPhoneNumber() {
  var phoneNumber = "+33 1 77 79 22 52";

  // Copie le numéro de téléphone dans le presse-papiers
  navigator.clipboard.writeText(phoneNumber);

  // Affiche une alerte en haut de la page
  var alertMessage = document.createElement('div');
  alertMessage.classList.add('alert-message');
  alertMessage.textContent = 'Copié';
  document.body.appendChild(alertMessage);

  // Supprime l'alerte après quelques secondes
  setTimeout(function() {
    alertMessage.remove();
  }, 3000);
}
