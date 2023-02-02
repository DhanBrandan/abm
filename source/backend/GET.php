<?php
header('Content-Type: application/json; charset=utf-8');
//Creo los datos a mano y le devuelvo al FrontEnd.
//Esto despues sera en realidad una consulta a la BD trayendo datos reales

$datos = new stdClass();
    
    //----------------------DATOS PERSONALES------------------------------
    $datos->DNI = (int) $_GET["dni"];
    $datos->Apellido = "Brandan";
    $datos->Nombre = "Daniel";
    $datos->Domicilio = "Barrio Ejercito Argentino";
    $datos->Fecha = "02/02/2023";
    $datos->Numero_Casa = "5095";
    $datos->Localidad = "Santiago - Capital";
    $datos->Pais = "Argentina";
    $datos->Celular = "+5493855014254";
    $datos->OtroDomicilio = "Null";
    $datos->PainsNacimiento = "Argentina";
    $datos->TiempoArgentina = "Anda Paya Bobo";
    
    echo json_encode($datos);


//echo json_encode("EL DNI: ".$_GET["dni"]);
