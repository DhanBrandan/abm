<?php //FORMATO DE LENGUAJE
// Negrita= <b> </b>
// Subrayado=<u> </u> 
// Cursiva=<i> </i>

$Numero_Exp = "<b>{$_REQUEST['Numero_Exp']} </b>"; //VARIABLES
$Motivo_Caratula = "<b>{$_REQUEST['Motivo_Caratula']}</b>";
$Numero_Nota = "<b>{$_REQUEST['Numero_Nota']}</b>";
$Num_Doc_Desvincular = "<b>{$_REQUEST['Num_Doc_Desvincular']}</b>";
$Motivo_Desviculacion = "<b>{$_REQUEST['Motivo_Desviculacion']}</b>";
$Area = "<b>{$_REQUEST['Area']}</b>";
$Numero_Documento_Corregido = "<b>{$_REQUEST['Numero_Documento_Corregido']}</b>";

//https://localhost/demodani/html/subsanacion.php?Numero_Exp=123123ABC&Motivo_Caratula=TExto%20de%20Motivo%20Caratula&Numero_Nota=NO_88858&Numero_Doc_Desvicular=84848&Motivo_Desviculacion=Prueba&Area=%20Informatica&Numero_Documento_Corregido=15151515

echo "<pre>
VISTO
El {$Numero_Exp} 
{$Motivo_Caratula}
Y CONSIDERANDO
Que, mediante el documento {$Numero_Nota} 
Se solicita la desvinculación del documento {$Num_Doc_Desvincular} Debido a que {$Motivo_Desviculacion}	
Que, a través del documento {$Numero_Nota}  la {$Area} solicita el remplazo del documento subsanado por el siguiente:
{$Numero_Documento_Corregido}
Que, es oportuno realizar la subsanación en el momento que se detecta un error material 
subsanable, en los términos de la Ley 7253, y la Ley 7267 y su Decreto Reglamentario 75/21, en 
el sistema GDE. Que, mediante Resolución RESOL-2020-447-E-GDESDE-MJDH, el Ministerio de 
Justicia y Derechos Humanos, organismo de aplicación del GDE conforme artículo 4 del Decreto 
2020-958-EGDESDEGSDE, reglamenta el presente procedimiento como alternativo para 
subsanar EE “en caso de Detectarse un error material de carga en relación a números de 
documentos, nombres, apellidos, fechas, títulos y palabras o solicitud etc. Siempre y cuando no 
alteren el sentido, la eficacia y ejecutoriedad del acto administrativo” será realizada por el 
mismo agente que cometió el error, con la firma conjunta del Jefe de Despacho o Director 
según correspondiere. Que la mencionada Resolución establece que para aquellas 
subsanaciones “que excedan lo dispuesto en el párrafo precedente o deban salir la órbita de la 
Jurisdicción”, deberán ser Subsanados con la firma conjunta del Ministro o Secretario”.
POR ELLO
EL SR. PRESIDENTE DE LA ADMINISTRACION PROVINCIAL DE RECURSOS HIDRICOS
RESUELVE:
ARTICULO 1.- SUBSANAR el error material, desvinculando y corrigiendo el documento {$Num_Doc_Desvincular} 
en el sistema GDE, del expediente {$Numero_Exp} y remplazándolo por el documento {$Numero_Documento_Corregido} 
en merito a los considerandos de la presente.
ARTICULO 2.- De forma.-
</pre>
";

?>