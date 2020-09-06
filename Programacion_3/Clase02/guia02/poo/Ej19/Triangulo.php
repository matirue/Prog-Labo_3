<?php



require_once "FiguraGeometrica.php";


class Triangulo extends FiguraGeometrica
{
    #CAMPOS
    private $_altura;
    private $_base;

    #METODOS
    public function __construct($b, $h)
    {
        parent:: __construct();
        $this->_altura=$h;
        $this->_base=$b;

        $this->CalcularDatos();
    }

    /*CalcularDatos será invocado en el constructor de la clase derivada que corresponda, su
    funcionalidad será la de inicializar los atributos _superficie y _perimetro. */
    protected function CalcularDatos()
    {
        $this->_perimetro=($this->_base * 3);
        $this->_superficie=($this->_base * $this->_altura)/2;
    }

    function Dibujar()
    {
        $espacios=($this->_base)/2;
        $lunares=($this->_base)-($this->_altura)+1;
        $dibu ='<div style="color : red">';        

        for($i=0; $i<$this->_altura; $i++)
        {
            for($k=0; $k<$espacios; $k++)
            {
                $dibu .= "&nbsp;";                    
            }  
            for($j=0; $j<$lunares; $j++)
            {
                $dibu .= "*";
            }
            $dibu .= "<br>";
            $espacios--;
            $lunares++;
        }
        echo $dibu . "</div>";
    }

    function ToString()
    {
        return parent::ToString() . "<br> >> Base: " . $this->_base
                                  . "<br> >> Altura: " . $this->_altura; 
    }

}

?>