<?php
$user = $_GET["userC"];
$pass = $_GET["passC"];


$servidor = "localhost"; 
$usuario = "root"; $contrasenha = ""; ;
$conexion = mysqli_connect($servidor, $usuario, $contrasenha);

$datab = "tiendaonline";
$db = mysqli_select_db($conexion,$datab);

$consulta = "INSERT INTO `clientes`(`cliente_id`, `cliente_nombre`, `cliente_pass`) VALUES ('','$user','$pass')";


$result = mysqli_query($conexion,$consulta);
if(!$result) 
{
    echo "No se ha podido realizar la consulta";
}


$_SESSION['user']=$result; 

header("Location: login.php?user=$user&pass=$pass");


?>