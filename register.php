<?php
$user = $_POST["user"];
$pass = $_POST["pass"];

//$_SESSION["id"] = "Usuario1"; 

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

//Si el usuario se encuentra en los registros recuperados de la BBDD

$_SESSION['user']=$result; 
if($user == "admin"){
    header("Location: pages/admin.php");

}
header("Location: login.php");




?>