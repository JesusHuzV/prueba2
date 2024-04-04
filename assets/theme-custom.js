document.addEventListener('DOMContentLoaded', function () {
  const showMoreButton = document.getElementById('showMoreButton');
  const testimonials = document.querySelectorAll('.custon123');

  if (testimonials.length >= 3) {
    const primeroTestimonials = testimonials[0];
    const segundoTestimonial = testimonials[testimonials.length - 1];

    showMoreButton.addEventListener('click', function () {
      primeroTestimonials.classList.remove('first:twcss-hidden');
      segundoTestimonial.classList.remove('last:twcss-hidden');
      // Ocultar el div contenedor del botón después de hacer clic
      showMoreButton.parentElement.style.display = 'none';
    });
  } else {
    showMoreButton.parentElement.style.display = 'none'; // Ocultar el div contenedor del botón si no hay suficientes testimonios
  }
});
