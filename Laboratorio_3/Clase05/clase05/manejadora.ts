namespace Test{

    export function EjemplosJSON(queEjemplo : number):void {

        switch(queEjemplo){
        
            case 1://objeto
            
                console.clear();
                //objeto simple
                let persona : any = { "nombre" : "Juan", "edad" : 35 };//intenta creaar una variable de tipo json
                //any acordate que era de cualquier tipo
                console.log(persona.nombre + " - " + persona.edad);
                
                console.log(persona["nombre"] + " - " + persona["edad"]);
                
                break; 
            
            case 2://arrays
            
                console.clear();
                //array simple
                let nombres : string[]= [ "Juan", "Pablo", "Ramiro" ];
                
                for(let i=0; i<nombres.length; i++)
                    console.log(nombres[i]); 

                //array de objetos
                let personas : any[] = [//escrito asi o en una variable da igual
                                        { "nombre" : "Juan", "edad" : 35 },
                                        { "nombre" : "Anibal", "edad" : 26 }
                                       ];
                            
                for(let i=0; i<personas.length; i++)
                    console.log(personas[i].nombre + " - " + personas[i].edad); 
                    
                break;

            case 3://uso del JSON.parse

                console.clear();
                //cadena con un array de objetos
                let cadJSON : string = ' [{ "nombre" : "Juan", "edad" : 35 },{ "nombre" : "Anibal", "edad" : 26 }] ';
                //any = 
                let personasJSON : any = JSON.parse(cadJSON); 

                for(let i=0; i<personasJSON.length; i++)
                    console.log(personasJSON[i].nombre + " - " + personasJSON[i].edad); 
                
                break;
                
            case 4://uso del JSON.stringify
                
                console.clear();
                //objeto simple
                let p : any = { "nombre" : "Juan", "edad" : 35 };
                //se transforma en un string 
                let toString : string = JSON.stringify(p);
                //la consola no muestra los elementos por separado
                console.log(toString);
                //lo recupero
                let obj : any = JSON.parse(toString);

                console.log(obj.nombre + " - " + obj.edad);
                
                break;
                
            case 5://JSON con funciones

                console.clear();
                //objeto con funciones
                let personaFunc : any = {
                                        "nombre" : "Jorge",
                                        "edad" : 23,
                                        "saludar" : function()
                                                    {
                                                        console.log("Hola soy " + this.nombre + " y tengo " + this.edad + ".");
                                                    }
                                    };

                personaFunc.saludar();
                    
                break;
                
            case 6://JSON complejo con funciones
                
                console.clear();
                //array de objetos con funciones
                let personasFunc = {
                                    "personas" : [
                                                    { "nombre" : "Juan", "edad" : 35 },
                                                    { "nombre" : "Anibal", "edad" : 26 }
                                                 ],
                                    "saludarTodos" : function()
                                                    {//saluda a todas las personas
                                                        for(let i=0; i<this.personas.length; i++)
                                                        {
                                                            console.log("Hola soy " + this.personas[i].nombre + " y tengo " + this.personas[i].edad + ".");
                                                        }
                                                    }   
                                };
                
                personasFunc.saludarTodos();
                
                break;
        }
    }

    export function IrHacia(pagina:string):void {
        window.location.href = pagina;
    }
}