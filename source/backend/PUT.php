<?php

header('Content-Type: application/json; charset=utf-8');

$datos = json_decode(file_get_contents('php://input'));

/*
GUARDAMOS LA INFORMACION EN LA DB QUE SE ENCUENTRA EN LA VARIABLE datos
*/

echo json_encode($datos["dni"]);


/*
header('Content-Type: application/json; charset=utf-8');

$datos = json_decode(file_get_contents('php://input'));
    
echo json_encode("Datos de la Persona con el DNI: ".$datos["dni"]);*/

