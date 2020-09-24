//esto se explica al 1:28:00

/*! Comentario visible en .js

Función para subir una foto al servidor web y 
mostrarla en un tag img, utilizando AJAX

*/

//Comentario no visible en .js

/*Comentario no visible en .js */                    

function SubirFoto() : void {
    
    //INSTANCIO OBJETO PARA REALIZAR COMUNICACIONES ASINCRONICAS
    let xhr : XMLHttpRequest = new XMLHttpRequest();

    //RECUPERO LA IMAGEN SELECCIONADA POR EL USUARIO
    let foto : any = (<HTMLInputElement> document.getElementById("foto"));

    //INSTANCIO OBJETO FORMDATA
    let form : FormData = new FormData();

    //AGREGO PARAMETROS AL FORMDATA:

    //creo un formulario desde ts
    //PARAMETRO RECUPERADO POR $_FILES
    form.append('foto', foto.files[0]);//aca genero un form le paso el atributo foto

    //PARAMETRO RECUPERADO POR $_POST O $_GET (SEGUN CORRESPONDA)
    form.append('op', "subirFoto");//otro parametro

    //METODO; URL; ASINCRONICO?
    xhr.open('POST', './BACKEND/nexo.php', true);

    //ESTABLEZCO EL ENCABEZADO DE LA PETICION
    xhr.setRequestHeader("enctype", "multipart/form-data");

    //ENVIO DE LA PETICION
    xhr.send(form);//como es por post le paso el formulario creado

    //FUNCION CALLBACK
    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {

            console.log(xhr.responseText);
            
            let ret = xhr.responseText;
            let retArray = ret.split("-");//toma una cadena , le paso un caracter de separacion y me geneara un array

            if(retArray[0] == "false"){
                console.error("NO se subió la foto!!!");
            }
            else{
                console.info("Foto subida OK!!!");
                (<HTMLImageElement> document.getElementById("imgFoto")).src = "./BACKEND/" + retArray[1];//se lo paso al src de imgfoto
            }
        }
    };
}