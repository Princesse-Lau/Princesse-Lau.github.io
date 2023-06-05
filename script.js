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
