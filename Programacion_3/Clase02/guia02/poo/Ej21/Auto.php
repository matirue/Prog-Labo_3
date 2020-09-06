<?php
class Auto
{
    #CAMPOS
    private $_color;
    private $_precio;
    private $_marca;
    private $_fecha;

    #CONSTRUCTOR
    /*
    public function __construct()
    {
        $this->_marca="sin valor";
        $this->_color="black";
        $this->_precio="0";
        $this->_fecha="0";    
    }
    
    public function __construct($marca, $color)
    {
        parent::Auto();
        $this->_marca=$marca;
        $this->_color=$color;
    }

    public function __construct($marca, $color, $precio)
    {
        parent::Auto($marca, $color);
        $this->_precio=$precio;
    }

    public function __construct($marca, $color, $precio, $fecha)
    {
        parent::Auto($marca, $color, $precio);
        $this->_fecha=$fecha;
    }
    */

    function __construct($marca, $color, $precio=0, $fecha="00/00/00")
    {
        $this->_marca=$marca;
        $this->_color=$color;
        $this->_precio=$precio;
        $this->_fecha=$fecha;
    }
    
    #METODOS
    /* Realizar un método de instancia llamado “AgregarImpuestos”, que recibirá un doble por
    parámetro y que se sumará al precio del objeto.*/
    public function AgreagarImpuesto($impuesto)
    {
        return $this->_precio = $this->_precio + $impuesto;
    }

    /*Realizar un método de clase llamado “MostrarAuto”, que recibirá un objeto de tipo “Auto” por
    parámetro y que mostrará todos los atributos de dicho objeto. */
    public static function MostrarAuto($auto)
    {
        echo "<br> >Marca: " . $auto->_marca .
             "<br> >Color: " . $auto->_color .
             "<br> >Precio: $" . $auto->_precio .
             "<br> >Fecha: " . $auto->_fecha;
    }

    /*Crear el método de instancia “Equals” que permita comparar dos objetos de tipo “Auto”. Sólo
    devolverá TRUE si ambos “Autos” son de la misma marca. */
    public static function Equals($a1, $a2)
    {
        if($a1->_marca == $a2->_marca)
           return true;
        return false;
    }

    /*Crear un método de clase, llamado “Add” que permita sumar dos objetos “Auto” (sólo si son de la
    misma marca, y del mismo color, de lo contrario informarlo) y que retorne un Double con la suma
    de los precios o cero si no se pudo realizar la operación. */
    public static function Add($a1, $a2)
    {
        if(Auto::Equals($a1, $a2) && $a1->_color==$a2->_color)
        {
            return $a1->_precio + $a2->_precio;
        }
        else
        {
            echo "<br> No son el mismo auto <br>";
            return 0;
        }
            
    }

}
?>