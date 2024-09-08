// Función que retorna una promesa para verificar si un número es 5
function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero === 5) {
            resolve("El número es 5");
        } else {
            reject("El número no es 5");
        }
    });
}


const numero = 5; 

verificarNumero(numero)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error); 
    });
