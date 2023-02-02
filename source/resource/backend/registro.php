<?php
header('Content-Type: application/json; charset=utf-8');

require('conexion.php');

$registro = Array(); //Creo un arreglo en blanco

$q = $db->query("SELECT registro.*, areas.area FROM registro INNER JOIN areas USING(id_area)"); // consulto a la BD

while ($r = $q->fetch_object()) { // ciclo por cada registro que devuelve la consulta. Si me devuelve 10, recorrera 10 veces.
    $registro []= $r; // Inserto dentro del Array subsanaciones cada registro que esta en $r
}

echo json_encode($registro); //Imprimo por pantalla en formato json
