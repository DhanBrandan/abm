<?php
    
    header('Content-Type: application/json; charset=utf-8');
    
    $datos = new stdClass();
    
    //----------------------DATOS PERSONALES------------------------------
    $datos->dni = strtoupper($POST["dni"]);
    
    echo json_encode($datos);
    //PRUEBA VINCULOS
?>


/*$datos->apellido = strtoupper($_GET["apellido"]);

$datos->dni = $_GET["dni"];

$datos->dat = $_GET["dat"];

$datos->cel = $_GET["cel"];
//----------------------DATOS INSTITUCION-----------------------------

$datos->inst = $_GET["inst"];

$datos->dir = $_GET["dir"];*/