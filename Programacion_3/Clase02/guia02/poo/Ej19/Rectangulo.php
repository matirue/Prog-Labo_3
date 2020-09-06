<?php

include "FiguraGeometrica.php";

class Rectangulo extends FiguraGeometrica
{
    #CAMPOS
    private $_ladoUno;
    private $_ladoDos;

    #METODOS
    public function __construct($l1, $l2)
    {
        parent::__construct();
        $this->_ladoUno=$l1;
        $this->_ladoDos=$l2;

        $this->CalcularDatos();
    }

    /*CalcularDatos será invocado en el constructor de la clase derivada que corresponda, su
    funcionalidad será la de inicializar los atributos _superficie y _perimetro. */
    protected function CalcularDatos()
    {
        $this->_perimetro=($this->_ladoUno * 2) + ($this->_ladoDos * 2);
        $this->_superficie=($this->_ladoUno * $this->_ladoDos);
    }

    function Dibujar()
    {
        //$dibujo='<div style="color" :' . $this->GetColor() . '">';
        $dibujo ='<div style="color : red">';
        for ($i=0; $i < $this->_ladoUno; $i++) 
        {
            for ($j=0; $j < $this->_ladoDos ; $j++) 
            {
                $dibujo .= "*";
            }
            $dibujo .= "<br>";
        }

        echo $dibujo . "</div>";
    }

    public function ToString()
    {
        return parent::ToString() . "<br> >>Lado Uno: " . $this->_ladoUno
                                  . "<br> >>Lado Dos: " . $this->_ladoDos; 
    }

}

?>