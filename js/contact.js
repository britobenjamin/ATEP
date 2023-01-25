document
  .getElementById('contactForm')
  .addEventListener('submit', function (evento) {
    evento.preventDefault(); // Previene el envío del formulario

    // Obtiene los datos del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var consulta = document.getElementById("consulta").value;

    // Valida los datos del formulario (opcional)
    if (nombre == "" || email == "" || consulta == "" || phone == "") {
      alert("Por favor, rellena todos los campos");
      return;
    }

    // Prepara el cuerpo del mensaje
    var mensaje = "Nombre: " + nombre + "\n";
    mensaje += "Email: " + email + "\n";
    mensaje += "Teléfono: " + phone + "\n";
    mensaje += "Consulta: " + consulta;

    // Crea una solicitud HTTP para enviar el correo electrónico
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://tu-servicio-de-correo-electronico.com/api/enviar-correo"
    );
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status === 200) {
        alert("Consulta enviada con éxito");
      } else {
        alert("Error al enviar la consulta: " + xhr.status);
      }
    };
    xhr.send(
      JSON.stringify({
        de: email,
        para: "admin@atep.com.ar",
        asunto: "Consulta desde el sitio web",
        mensaje: mensaje,
      })
    );
  });
