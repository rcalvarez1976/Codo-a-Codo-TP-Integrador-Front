// Declaro la variable para el precio de la entrada.
const valorDeEntrada = 200;
// Realizo el llamado del botón por su ID y le asigno un evento
document.querySelector("#resumen").addEventListener("click", montoAPagar);
// Declaro la función que va a ser llamada en el evento.
function montoAPagar() {
     // Obtengo valores de los input para trabajar la lógica.
     let cantidad = document.querySelector("#cantidad").value;
     let categoría = document.querySelector("#categoría");
     let valorCategoría = categoría.options[categoría.selectedIndex].value;
     let totalAPagar = document.querySelector("#totalAPagar");
     // Realizo la lógica de la opración.
     let total;
     if (valorCategoría === "Estudiante" && cantidad > 0) {
          total = cantidad * (valorDeEntrada * 0.2);
     }
     else if (valorCategoría === "Trainee" && cantidad > 0) {
          total = cantidad * (valorDeEntrada * 0.5);
     }
     else if (valorCategoría === "Junior" && cantidad > 0) {
          total = cantidad * (valorDeEntrada * 0.85);
     }
     else {
          // Genero un alerta cuando el valor ingresado sea cero.
          alert("Por favor ingrese la cantidad deseeada. La misma debe ser un valor mayor a \"0\".");
     }
     // Envío el resultado obtenido de la operacion de la función al input correspondiente.
     totalAPagar.value = "Total a Pagar $:  " + total;
     // Agrego esta sentencia para evitar que se muestre undefined como valor devuelto.
     if (valorCategoría === "Estudiante" && cantidad == 0 || valorCategoría === "Trainee" && cantidad == 0 || valorCategoría === "Junior" && cantidad == 0) {
          totalAPagar.value = "Total a Pagar $:  ";
     }
}




