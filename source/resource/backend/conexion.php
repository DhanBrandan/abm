<?php
$servidor = "127.0.0.1";
$usuario = "root";
$password = "";
$base = "pruebabd";

$db = mysqli_connect($servidor, $usuario, $password, $base);

if (!$db) {
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
/*
echo "SE CONECTO A LA BD";

$q = $db->query("SELECT subsanaciones.*, areas.area FROM subsanaciones INNER JOIN areas USING(id_area)");
$r = $q->fetch_object();

echo "<pre>";
var_dump($r);
echo "</pre>";
*/