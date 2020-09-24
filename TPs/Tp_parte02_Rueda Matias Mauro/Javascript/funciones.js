function AdministrarValidaciones() {
    var error = ""; //mensaje a mostar si hay un error
    if (!ValidarCamposVacios(document.getElementById("txtApellido").value)) {
        error += "\nError, APELLIDO sin carga!!";
    }
    if (!ValidarCamposVacios(document.getElementById("txtNombre").value)) {
        error += "\nError, NOMBRE sin carga!!";
    }
    /**********************************************************************************************************/
    var dni = parseInt(document.getElementById("txtDni").value);
    var dniMinimo = parseInt(document.getElementById("txtDni").min);
    var dniMaximo = parseInt(document.getElementById("txtDni").max);
    if (!ValidarRangoNumerico(dni, dniMinimo, dniMaximo)) {
        error += "\nError, el DNI no es valido.";
    }
    /**********************************************************************************************************/
    var valor = document.getElementById("cboSexo").value;
    var valorIncorrecto = "---";
    if (!ValidarCombo(valor, valorIncorrecto)) {
        error += "\nError, seleccion de sexo incorrecto.";
    }
    /**********************************************************************************************************/
    var legajo = parseInt(document.getElementById("txtLegajo").value);
    var legajoMinimo = parseInt(document.getElementById("txtLegajo").min);
    var legajoMaximo = parseInt(document.getElementById("txtLegajo").max);
    if (!ValidarRangoNumerico(legajo, legajoMinimo, legajoMaximo)) {
        error += "\nError, el LEGAJO no es valido.";
    }
    /**********************************************************************************************************/
    var sueldo = parseInt(document.getElementById("txtSueldo").value);
    var sueldoMinimo = parseInt(document.getElementById("txtSueldo").min);
    var sueldoMaximo = ObtenerSueldoMaximo(ObtenerTurnoSeleccionado());
    if (!ValidarRangoNumerico(sueldo, sueldoMinimo, sueldoMaximo)) {
        error += "\nError, SUELDO invalido para el TURNO seleccionado";
    }
    /**********************************************************************************************************/
    if (ValidarCamposVacios(error)) {
        console.log(error);
        alert(error);
    }
    else {
        console.log("Datos cargados con exito!!");
        alert("Datos cargados con exito!!");
    }
}
/**
 * Retorna true si no está vacío o false caso contrario.
 * @param cadena valor del atributo id del campo a ser validado
 */
function ValidarCamposVacios(cadena) {
    if (cadena.length > 0)
        return true;
    return false;
}
/**
 * Retorna true si el valor pertenece al rango o false caso contrario.
 * @param numero valor a ser validado
 * @param minimo valores mínimos
 * @param maximo máximos del rango.
 */
function ValidarRangoNumerico(numero, minimo, maximo) {
    if (numero >= minimo && numero <= maximo)
        return true;
    return false;
}
/**
 * Retorna true si no coincide o false caso contrario
 * @param cadena valor del atributo id del combo a ser validado
 * @param cadenaIncorrecta valor que no debe de tener
 */
function ValidarCombo(cadena, cadenaIncorrecta) {
    return cadena != cadenaIncorrecta;
}
/**
 * Retorna el valor del elemento (type=radio) seleccionado por el usuario
 */
function ObtenerTurnoSeleccionado() {
    //tomo todos los inputs
    var radio = document.getElementsByTagName("input");
    var seleccion = "";
    for (var index = 0; index < radio.length; index++) { //recorro los inputs
        var input = radio[index];
        if (input.type === "radio") { //verifica que sea de tipo radio
            if (input.checked === true) { //verifica que este seleccionado
                seleccion += input.value + "-";
            }
        }
    }
    seleccion = seleccion.substr(0, seleccion.length - 1); //elimino el ultimo -
    return seleccion;
}
/**
 * Retornará el valor del sueldo máximo.
 * @param cadena valor del turno elegido
 */
function ObtenerSueldoMaximo(cadena) {
    var ret = 0;
    switch (cadena) {
        case "Ma&ntilde;n":
            ret = 20000;
            break;
        case "Tarde":
            ret = 18500;
            break;
        case "Noche":
            ret = 25000;
            break;
    }
    return ret;
}
