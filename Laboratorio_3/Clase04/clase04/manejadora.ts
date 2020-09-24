namespace Test{

    //CREO UNA INSTANCIA DE XMLHTTPREQUEST
    let xhttp : XMLHttpRequest = new XMLHttpRequest();

    export function Ajax():void {

        //METODO; URL; ASINCRONICO?
        xhttp.open("GET", "BACKEND/ajax_test.php", true);//perticion get si parametro

        //ENVIO DE LA PETICION
        xhttp.send();//sin param devolvera el hola mundo ajax

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => { //asocio 
            //muestro el readyDtate y el estado
            console.log(xhttp.readyState + " - " + xhttp.status);
            
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);//muestro la respuesta del servidor
            }
        };

    }

    //ENVIO PETICION CON PARAMETROS POR METODO GET
    export function AjaxGET(): void{

        //METODO; URL + PARAMETROS; ASINCRONICO?
        //los parametros deben estar en el url, NO EN EL METODO
        xhttp.open("GET", "BACKEND/ajax_test.php?valor="+Math.random()*100, true);

        //ENVIO DE LA PETICION
        xhttp.send();

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);
            }
        };	
    }
    //ENVIO PETICION CON PARAMETROS POR METODO POST
    export function AjaxPOST():void {
        
        //METODO; URL; ASINCRONICO?
        xhttp.open("POST", "BACKEND/ajax_test.php", true);

        //SETEO EL ENCABEZADO DE LA PETICION	
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        
        //ENVIO DE LA PETICION CON LOS PARAMETROS
        xhttp.send("valor="+Math.random()*100);//lo parametros van en el send, para mandar mas parametros concadeno con &, siempre en formato de texto

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);//muestro si da todo bien
            }
        };
    }

    export function ActualizarGET():void {//aca puedo modificar elementos en la pagina
        
        //METODO; URL + PARAMETROS; ASINCRONICO?
        xhttp.open("GET", "BACKEND/ajax_test.php?valor="+Math.random()*100, true);

        //ENVIO DE LA PETICION
        xhttp.send();

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => {
            AdministrarRespuesta();
        }
    }

    export function ActualizarPOST():void {

        //METODO; URL; ASINCRONICO?
        xhttp.open("POST", "BACKEND/ajax_test.php", true);
        
        //SETEO EL ENCABEZADO DE LA PETICION	
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        
        //ENVIO DE LA PETICION CON LOS PARAMETROS
        xhttp.send("valor="+Math.random()*100);

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => {//modifico la pagina
            AdministrarRespuesta();
        };
    }

    function AdministrarRespuesta():void {

        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //LA RESPUESTA SE GUARDA EN UN ELEMENTO HTML             .inerHtml para castearlo
            (<HTMLDivElement>document.getElementById("divResultado")).innerHTML = xhttp.responseText;
        }

    }
/*******************************************************************************************************/    
/*******************************************************************************************************/
    export function ProcesoLargo():void {

        let pagina : string = "BACKEND/proceso_largo.php";
        let div = <HTMLDivElement> document.getElementById("divResultado");

        //LIMPIO EL CONTENIDO DEL DIV    
        div.innerHTML = '';

        //MUESTRO EL GIF EN EL CENTRO DE LA PAGINA
        AdministrarGif(true, 1);//muestra u oculta el gift

        //METODO; URL; ASINCRONICO?
        xhttp.open("POST", pagina, true);
        
        //SETEO EL ENCABEZADO DE LA PETICION	
        xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
        
        //ENVIO DE LA PETICION
        xhttp.send(null);

        //FUNCION CALLBACK
        xhttp.onreadystatechange = () => {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
           if (xhttp.readyState === DONE) {
                if (xhttp.status === OK) {
                    //MUESTRO EL RESULTADO DE LA PETICION
                    div.innerHTML = xhttp.responseText;
                    //OCULTO EL GIF
                    AdministrarGif(false);
                }
                else{
                    alert("Error\n"+xhttp.status);
                    //OCULTO EL GIF
                    AdministrarGif(false);                
                }
            }
        }; 

    }

    //funcion para mostrar u ocultar el gift
    function AdministrarGif(mostrar:boolean, cual:number = 1):void {

        var gif : string = cual === 1 ? "AJAX/gif-load.gif" : "AJAX/200.webp";
        let div = <HTMLDivElement> document.getElementById("divGif");
        let img = <HTMLImageElement> document.getElementById("imgGif");//tomo la imagen

        if(mostrar){//esto es parte del CSS a ver mas adelante
            div.style.display = "block";//lo hago visible
            div.style.top = "50%";//desde techo (es 0%) para abajo lo coloco a 50% la mitad de la pantalla
            div.style.left = "45%"//desde la izquierada a un 45%
            img.src = gif;//le paso el gif q sea
        }

        if(!mostrar){//limpio  la imagen
            div.style.display = "none";
            img.src = "";
        }
    }

    export function IrHacia(pagina:string):void {
        window.location.href = pagina;
    }
}