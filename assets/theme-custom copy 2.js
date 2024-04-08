/*document.addEventListener('DOMContentLoaded', function () {
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
  let preguntaDesplegada = true; // Bandera para indicar si alguna pregunta está desplegada

  const botonesPregunta = document.querySelectorAll('.boton-pregunta');

  botonesPregunta.forEach(function (boton) {
    boton.addEventListener('click', function () {
      const idTema = this.getAttribute('data-id');
      if (preguntaDesplegada) {
        // Si alguna pregunta ya está desplegada, cierra todas las preguntas
        cerrarTodasPreguntas();
      }

      // Muestra las preguntas y respuestas del tema seleccionado
      mostrarPreguntas(idTema);

      // Remover la clase twcss-text-amber-500 de todos los botones--------------
      botonesPregunta.forEach(function (boton) {
        boton.classList.remove('twcss-text-amber-500');
      });

      // Añadir la clase twcss-text-amber-500 al botón actual-------------
      this.classList.add('twcss-text-amber-500');
    });
  });

  function cerrarTodasPreguntas() {
    const preguntasRespuestas = document.querySelectorAll('.preguntas-tema');
    preguntasRespuestas.forEach(function (item) {
      item.style.display = 'none';
    });
  }

  function mostrarPreguntas(id) {
    // Obtiene todas las preguntas del tema actual
    var preguntasRespuestasTema = document.querySelectorAll(
      '.preguntas-tema[data-tema="' + id + '"]',
    );

    // Cierra todas las preguntas del tema actual
    preguntasRespuestasTema.forEach(function (item) {
      item.style.display = 'none';
    });

    // Abre la pregunta seleccionada
    var preguntaMostrar = document.getElementById(id);
    preguntaMostrar.style.display = 'block';
  }

  function cerrarPreguntasDelTema(id) {
    var preguntasAbiertas = document.querySelectorAll(
      '.preguntas-tema[data-tema="' + id + '"]',
    );

    preguntasAbiertas.forEach(function (item) {
      item.style.display = 'none';
      alert('hola');
    });
  }

  const primerBoton = document.querySelector('.boton-pregunta');

  // Verificar si se encontró algún botón de pregunta
  if (primerBoton) {
    // Obtener el ID del tema asociado al primer botón de pregunta
    const idPrimerTema = primerBoton.getAttribute('data-id');

    // Mostrar las preguntas y respuestas del primer tema por defecto
    mostrarPreguntas(idPrimerTema);

    // Añadir la clase twcss-text-amber-500 al primer botón
    primerBoton.classList.add('twcss-text-amber-500');
  }
});
*/