<?php
header('Content-Type: application/json; charset=utf-8');

$datos = json_decode(file_get_contents('php://input'));

/*
GUARDAMOS LA INFORMACION EN LA DB QUE SE ENCUENTRA EN LA VARIABLE datos
*/

echo json_encode($datos);
