const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const botón = document.getElementById("botón");
const data = {Nombre: "",
              Apellido: "",
              Fecha: ""}


botón.addEventListener("click", function() {
    const Nombre = document.getElementById("nombre").value;
    const Apellido = document.getElementById("apellido").value;
    const Fecha = document.getElementById("fecha").value;

    data.Nombre = Nombre;
    data.Apellido = Apellido;
    data.Fecha = Fecha;

    const request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

    fetch(apiUrl, request)
        .then((response) => {
    if(!response.ok) {
        throw new Error('Error al solicitar');
    }
    return response.json();
})

.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error('Error', error)
});

})
