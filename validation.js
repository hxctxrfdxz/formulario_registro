const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const fecha = document.getElementById("fechanac");
const direccion = document.getElementById("direccion");
const cedula = document.getElementById("cedula");
const contraseña = document.getElementById("contraseña");
const confirmar = document.getElementById("confirmar-contraseña");
const warnings = document.getElementById("warnings");

form.addEventListener("submit", function(e){
    e.preventDefault(); // evita que se recargue la página

    let mensajes = ""; // acumulador de errores

    // --- Validaciones básicas ---
    if(nombre.value === "" || nombre.value.length < 3){
        mensajes += "Escribe tu nombre completo (mínimo 3 letras)<br>";
    }

    if(correo.value === "" || !correo.value.includes("@")){
        mensajes += "Escribe un correo válido<br>";
    }

    if(telefono.value === "" || telefono.value.length < 9){
        mensajes += "Escribe un número de teléfono válido<br>";
    }

    if(fecha.value === ""){
        mensajes += "Selecciona tu fecha de nacimiento<br>";
    }

    if(direccion.value === "" || direccion.value.length < 5){
        mensajes += "Escribe tu dirección completa<br>";
    }

    if(cedula.value === "" || cedula.value.length != 10){
        mensajes += "La cédula debe tener 10 números<br>";
    }

    if(contraseña.value === "" || contraseña.value.length < 6){
        mensajes += "La contraseña debe tener al menos 6 caracteres<br>";
    }

    if(confirmar.value === "" || confirmar.value !== contraseña.value){
        mensajes += "Las contraseñas no coinciden<br>";
    }

    // --- Mostrar mensajes ---
    if(mensajes !== ""){
        warnings.innerHTML = mensajes;     // muestra todos los errores
        warnings.style.color = "red";      // en rojo
    } else {
        warnings.innerHTML = "✅ Formulario enviado correctamente";
        warnings.style.color = "green";
        form.reset(); // limpia los campos
    }
});
