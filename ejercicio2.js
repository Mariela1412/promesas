// Función que verifica si una persona tiene la edad suficiente
function validarEdad(edad) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve("Edad válida para acceder al contenido");
        } else {
            reject("Edad insuficiente para acceder al contenido");
        }
    });
}


const edadPersona = 20; 

validarEdad(edadPersona)
    .then((mensaje) => {
        console.log(mensaje); 
    })
    .catch((error) => {
        console.error(error);
    });
