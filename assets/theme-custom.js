document.addEventListener('DOMContentLoaded', function () {
  const showMoreButton = document.getElementById('showMoreButton');
  const testimonials = document.querySelectorAll('.custon123');

  if (testimonials.length >= 3) {
    const primeroTestimonials = testimonials[0];
    const segundoTestimonial = testimonials[testimonials.length - 1];

    showMoreButton.addEventListener('click', function () {
      console.log('Botón clickeado');
      primeroTestimonials.classList.remove('first:twcss-hidden');
      segundoTestimonial.classList.remove('last:twcss-hidden');
    });
  } else {
    showMoreButton.style.display = 'none';
  }
});
