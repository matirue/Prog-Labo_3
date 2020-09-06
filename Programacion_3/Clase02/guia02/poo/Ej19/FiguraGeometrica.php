<?php
/*La clase FiguraGeometrica posee: todos sus atributos protegidos, un constructor por defecto, un
método getter y setter para el atributo _color, un método virtual (ToString) y dos métodos
abstractos: Dibujar (público) y CalcularDatos (protegido).
CalcularDatos será invocado en el constructor de la clase derivada que corresponda, su
funcionalidad será la de inicializar los atributos _superficie y _perimetro.
Dibujar, retornará un string (con el color que corresponda) formando la figura geométrica del objeto
que lo invoque (retornar una serie de asteriscos que modele el objeto). */


abstract class FiguraGeometrica
{
    #CAMPOS
    protected $_color;
    protected $_perimetro;
    protected $_superficie;

    #METODOS
    public function __construct()
    {
        //$this->_color="#4F054F";
        $this->_color='red';
        $this->_perimetro=0;
        $this->_superficie=0;
    }

    /*su funcionalidad será la de inicializar los atributos _superficie y _perimetro. */
    protected abstract function CalcularDatos();
    /*Dibujar, retornará un string (con el color que corresponda) formando la figura geométrica del objeto
    que lo invoque (retornar una serie de asteriscos que modele el objeto). */
    public abstract function Dibujar();
    
    public function GetColor()
    {
        return $this->_color;
    }
    public function SetColor($color)
    {
        $this->_color=$color;
    }

    /*Utilizar el método ToString para obtener toda la información completa del objeto, y luego dibujarlo
    por pantalla. */
    public function ToString()
    {
        return " > Color: " . $this->GetColor() .  
               "<br> > Perimetro: " . $this->_perimetro . 
               "<br> > Superficie: " . $this->_superficie;
        /*echo " > Color: " . $this->GetColor() .  
               "<br> > Perimetro: " . $this->_perimetro . 
               "<br> > Superficie: " . $this->_superficie;
                */
    }
} 
?>