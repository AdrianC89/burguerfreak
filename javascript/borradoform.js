document.getElementById('btn-borrar').addEventListener('click', function() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('hamburguesa').selectedIndex = 0;
    document.getElementById('cantidad').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comentario').value = '';
  });