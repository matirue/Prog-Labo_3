<?php 

interface  ISlimeable
{//metodos declarados para el api
    function TraerTodos($request, $response, $args);
    function TraerUno($request, $response, $args);
    function AgregarUno($request, $response, $args);
    function ModificarUno($request, $response, $args);
    function BorrarUno($request, $response, $args);
}