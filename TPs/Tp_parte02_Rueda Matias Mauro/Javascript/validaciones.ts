
function AdministrarValidaciones():void{

    let error:string=""; //mensaje a mostar si hay un error

    if(!ValidarCamposVacios((<HTMLInputElement>document.getElementById("txtApellido")).value)){
        error += "\nError, APELLIDO sin carga!!";
    }
    if(!ValidarCamposVacios((<HTMLInputElement>document.getElementById("txtNombre")).value)){
        error += "\nError, NOMBRE sin carga!!";
    }
    
    /**********************************************************************************************************/
    
    let dni:number = parseInt((<HTMLInputElement>document.getElementById("txtDni")).value);
    let dniMinimo:number = parseInt((<HTMLInputElement>document.getElementById("txtDni")).min);
    let dniMaximo:number = parseInt((<HTMLInputElement>document.getElementById("txtDni")).max);
    
    if(!ValidarRangoNumerico(dni, dniMinimo, dniMaximo)){
        error += "\nError, el DNI no es valido.";
    }

    /**********************************************************************************************************/

    let valor:string=(<HTMLInputElement>document.getElementById("cboSexo")).value;
    let valorIncorrecto = "---";
    if(!ValidarCombo(valor, valorIncorrecto)){
        error += "\nError, seleccion de sexo incorrecto.";
    }
    
    /**********************************************************************************************************/

    let legajo:number = parseInt((<HTMLInputElement>document.getElementById("txtLegajo")).value);
    let legajoMinimo:number = parseInt((<HTMLInputElement>document.getElementById("txtLegajo")).min);
    let legajoMaximo:number = parseInt((<HTMLInputElement>document.getElementById("txtLegajo")).max);
    if(!ValidarRangoNumerico(legajo, legajoMinimo, legajoMaximo)){
        error += "\nError, el LEGAJO no es valido.";
    }
    
    /**********************************************************************************************************/
    
    let sueldo:number = parseInt((<HTMLInputElement>document.getElementById("txtSueldo")).value);
    let sueldoMinimo:number = parseInt((<HTMLInputElement>document.getElementById("txtSueldo")).min);
    let sueldoMaximo:number = ObtenerSueldoMaximo( ObtenerTurnoSeleccionado() );
    if(!ValidarRangoNumerico(sueldo, sueldoMinimo, sueldoMaximo)){
        error += "\nError, SUELDO invalido para el TURNO seleccionado";
    }
    
    /**********************************************************************************************************/

    if(ValidarCamposVacios(error)){
        console.log(error);
        alert(error);
    }
    else{        
        console.log("Datos cargados con exito!!");
        alert("Datos cargados con exito!!");                
    }

}

/**
 * Retorna true si no está vacío o false caso contrario. 
 * @param cadena valor del atributo id del campo a ser validado
 */
function ValidarCamposVacios(cadena:string):boolean{
    if(cadena.length>0)
        return true;
    return false;
}

/**
 * Retorna true si el valor pertenece al rango o false caso contrario.
 * @param numero valor a ser validado 
 * @param minimo valores mínimos
 * @param maximo máximos del rango.
 */
function ValidarRangoNumerico(numero:number, minimo:number, maximo:number):boolean{
    if(numero >= minimo && numero <= maximo)
        return true;
    return false;
}

/**
 * Retorna true si no coincide o false caso contrario
 * @param cadena valor del atributo id del combo a ser validado
 * @param cadenaIncorrecta valor que no debe de tener
 */
function ValidarCombo(cadena:string, cadenaIncorrecta:string):boolean{
    return cadena != cadenaIncorrecta;
}

/**
 * Retorna el valor del elemento (type=radio) seleccionado por el usuario
 */
function ObtenerTurnoSeleccionado():string{
    //tomo todos los inputs
    let radio : HTMLCollectionOf<HTMLInputElement> = <HTMLCollectionOf<HTMLInputElement>>document.getElementsByTagName("input");
    let seleccion:string="";

    for (let index = 0; index < radio.length; index++) {//recorro los inputs
        let input = radio[index];
        
        if(input.type==="radio"){ //verifica que sea de tipo radio
            if(input.checked===true){ //verifica que este seleccionado
                seleccion += input.value + "-";
            }
        }
    }
    seleccion=seleccion.substr(0, seleccion.length-1); //elimino el ultimo -
    return seleccion;
}

/**
 * Retornará el valor del sueldo máximo.
 * @param cadena valor del turno elegido
 */
function ObtenerSueldoMaximo(cadena :string): number{
    let ret=0;

    switch(cadena){
        case "Ma&ntilde;n":
            ret=20000;
            break;

        case "Tarde":
            ret=18500;
            break;

        case "Noche":
            ret=25000;
            break;
    }
    return ret;
}