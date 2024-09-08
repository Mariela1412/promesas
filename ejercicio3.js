
function enviarCorreo(direccion) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if (direccion) {
                resolve(`Correo enviado a ${direccion}`);
            } else {
                reject("Dirección de correo no proporcionada");
            }
        }, 2000); 
    });
}


const direccionCorreo = "segovimariela76@gmail.com"; 

enviarCorreo(direccionCorreo)
    .then((mensaje) => {
        console.log(mensaje); 
    })
    .catch((error) => {
        console.error(error);
    });
