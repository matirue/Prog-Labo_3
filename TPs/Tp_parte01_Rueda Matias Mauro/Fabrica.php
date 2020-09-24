<?php

include_once("Empleado.php");


class Fabrica{

    private $_cantidadMaxima;
    private $_empleados;
    private $_razonSocial;

    public function __construct($razonSocial){
        $this->_cantidadMaxima=5;
        $this->_empleados=array();
        $this->_razonSocial=$razonSocial;        
    }

    public function AgregarEmpleado($empleado){
        if(is_a($empleado, "Empleado"))
        {
            if(count($this->_empleados) <= $this->_cantidadMaxima)
            {
                array_push($this->_empleados, $empleado);
                $this->EliminarEmpleadosRepetidos();
                return true;
            }
        }
        return false;
    }

    public function CalcularSueldos(){        
        $total=0;
        foreach($this->_empleados as $aux){
            $total += $aux->GetSueldo();
        } 
        return $total;
    }

    public function EliminarEmpleado($empleado){
        foreach($this->_empleados as $key => $i){
            if($i == $empleado){
                unset($this->_empleados[$key]);//destruye la variable indicada
                return true;
            }
        }
        return false;
    }

    private function EliminarEmpleadosRepetidos(){
        $this->_empleados=array_unique($this->_empleados, SORT_REGULAR);//Elimina valores duplicados de un array - REGULAR: compara ítems normalmente
    }

    public function ToString(){
        $cadena = " Cantidad Maxima: " . $this->_cantidadMaxima . "<br> Razon Social: " . $this->_razonSocial . "<br> Lista de Empleados: ";

        foreach($this->_empleados as $aux){
            $cadena .= "<br>" . " >> " . $aux->GetLegajo() . " - " . $aux->GetApellido() . ", " . $aux->GetNombre() . " - " . $aux->GetDni() 
            . " - " . $aux->GetSexo() . " - $" . $aux->GetSueldo() . " - " . $aux->GetTurno();
        }
        return $cadena;
    }
}
?>