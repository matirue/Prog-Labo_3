//esto esta escrito solo en js, mas adelante lo aplica en ts
function ModificarPs(){

    //A TODOS LOS ELEMENTOS P DEL DOCUMENTO LES CAMBIO LA FUENTE
    //            'CLAVE'        'VALOR'
    $("p").css("font-family", "arial black");//cambio la fuente del contenido

    console.log("para acceder (por nombre) a un elemento HTML");
    console.log("se coloca como selector el nombre del elemento.");
}

function ModificarPorId(){

    //A UN DETERMINADO ELEMENTO LE CAMBIO EL CONTENIDO
    var contenidoAnterior = $("#idP").html();//es un elemento de bloque
    alert(contenidoAnterior);

    //A UN DETERMINADO ELEMENTO LE CAMBIO EL CONTENIDO
    $("#idP").html("Establezco un nuevo contenido en el elemento HTML.");//este es el seter

    console.log("para acceder (por id) a un elemento HTML");
    console.log("se coloca como selector el valor de su atributo ID");
    console.log("anteponiendole el simbolo '#'.");    
}

function MostrarDatos(){

    //OBTENGO LOS DISTINTOS VALORES POR ID DE ELEMENTO
    var nombre = $("#txtNombre").val();
    var opcion = $("#cboSeleccion").val();//recupera el value xq lo tiene, si no lo tiene da su nombre

    alert("Nombre: " + nombre + "\nOpcion: " + opcion);

    //COLOCO LOS VALORES RECUPERADOS EN UN DIV
    $("#idDiv").html("Nombre: " + nombre + "<br>Opcion: " + opcion);
}

function CambiarDatos(){

    //ESTABLEZCO NUEVOS VALORES
    alert("Cambia de valor la seleccion ('op2')\ny del nombre ('ROBERTO')");
    
    $("#txtNombre").val("ROBERTO");
    $("#cboSeleccion").val("op2");
    //si el combo tiene un value definido, cuando quiero establecerlo le tengo q pasar el valor del option

}