//en el video lo explica al 1:07:00 min
class Ajax {

    private _xhr: XMLHttpRequest;

    //atributos para checkear si son 200 y 4
    private static DONE : number;
    private static OK : number;

    //los inicializo
    public constructor() {
        this._xhr = new XMLHttpRequest();
        Ajax.DONE = 4;
        Ajax.OK = 200;
    }

    //            path           funcition, le pido al usuario q me indique que funcion quiere -- param que parametro recibe el GET
    //en caso de error (? opcional ) lo redirige a una funcion
    public Get = (ruta: string, success: Function, params: string = "", error?: Function):void => {
    
        let parametros:string = params.length > 0 ? params : "";
        ruta = params.length > 0 ? ruta + "?" + parametros : ruta;

        this._xhr.open('GET', ruta);
        this._xhr.send();

        this._xhr.onreadystatechange = () => {

            if (this._xhr.readyState === Ajax.DONE) {
                if (this._xhr.status === Ajax.OK) {
                    success(this._xhr.responseText);
                } else {
                    if (error !== undefined){
                        error(this._xhr.status);
                    }
                }
            }

        };
    };

    public Post = (ruta: string, success: Function, params: string = "", error?: Function):void => {

        let parametros:string = params.length > 0 ? params : "";

        this._xhr.open('POST', ruta, true);
        this._xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        this._xhr.send(parametros);

        this._xhr.onreadystatechange = ():void => {

            if (this._xhr.readyState === Ajax.DONE) {
                if (this._xhr.status === Ajax.OK) {
                    success(this._xhr.responseText);
                } else {
                    if (error !== undefined){
                        error(this._xhr.status);
                    }
                }
            }
        };
    };
}