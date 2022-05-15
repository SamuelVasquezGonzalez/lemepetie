admin = {
    usuario: "admin.112",
    contraseña: "lenwas159"
}

// Validar

let traerDatos = document.querySelector('.enviar');
let inputs = document.querySelectorAll('.input')

traerDatos.addEventListener('click', recibirDatos);
inputs.forEach(element => {
    element.addEventListener("keypress", function onEvent(event) {
        if (event.key === "Enter") {
            recibirDatos();
        }
    });
});

function recibirDatos () {


    let usuario = document.querySelector('.usuario').value;
    let contraseña = document.querySelector('.contraseña').value;
    let label = document.querySelector('label');
    if(usuario < 1 && contraseña < 1){
        label.innerHTML = 'Rellene los campos';
        label.classList.add('error');
        label.classList.remove('bien');

    }else if(usuario == admin.usuario && contraseña == admin.contraseña){
        label.style.left = "10px";
        setTimeout(() => {
            label.style.left = "-300px";
        }, 5000);
        label.innerHTML = 'Ingresando...';
        label.classList.add('bien');

    }else{
        label.style.left = "10px";
        setTimeout(() => {
            label.style.left = "-300px"
        }, 5000);
        label.innerHTML = 'No encontramos el usuario';
        label.classList.add('error');
        label.classList.remove('bien');
    }

}

// Mostrar contraseña

let mostrarOcultar = document.querySelector('.verContraseña')
mostrarOcultar.addEventListener('click', mostrar);

let ver = document.querySelector('.uno');
let ocultar = document.querySelector('.dos');


function mostrar () {
    let contraseña = document.querySelector('.contraseña');
    
    if(contraseña.getAttribute('type') == 'password'){
        contraseña.setAttribute('type', 'text');
    }else{
        contraseña.setAttribute('type', 'password');
    }
    
    ver.classList.toggle('oculto')
    ocultar.classList.toggle('oculto')
}

// Samuel Vasquez Gonzalez