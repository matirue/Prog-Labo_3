<?php
/*La clase Punto ha de tener dos atributos privados con acceso de sólo lectura (sólo con getters),
que serán las coordenadas del punto. Su constructor recibirá las coordenadas del punto. */
class Punto
{
    #CAMPOS
    private $_x;
    private $_y;
    
    #METODOS
    public function __construct($x, $y)
    {
        $this->_x=$x;
        $this->_y=$y;
    }

    //solo lectura
    public function GetX()
    {
        return $this->_x;
    }

    //solo lectura
    public function GetY()
    {
        return $this->_y;
    }
}

?>