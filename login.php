<?php
$user = $_GET["user"];
$pass = $_GET["pass"];




$servidor = "localhost"; 
$usuario = "root"; $contrasenha = ""; ;
$conexion = mysqli_connect($servidor, $usuario, $contrasenha);

$datab = "tiendaonline";
$db = mysqli_select_db($conexion,$datab);

$consulta = "SELECT * FROM clientes WHERE cliente_nombre = '$user' AND cliente_pass = '$pass'";


$result = mysqli_query($conexion,$consulta);
if(!$result) 
{
    echo "No se ha podido realizar la consulta";
}

if(mysqli_num_rows($result)>0){
    session_start();
    $_SESSION['user']=$result; 
    if($user == "admin"){
        header("Location: pages/admin.php");

    }
}else{
    echo'<script type="text/javascript">
    alert("Usuario o contraseña incorrectos");
    window.location.href="index.html";
    </script>';
}


?>



<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/master.css">
    <link rel="stylesheet" href="css/homeStyle.css">
    <link rel="icon" type="image/x-icon" href="images/favicon.jpg">
    <script src="js/app.js"></script>
    <title>Minifiguras Star Wars</title>
</head>
<body>
    <div id="login">
    <?php echo "<p>Hola $user</p>"?>
    <form action="destroy.php" method="post">
        <input type="submit" value="Cerrar sesión"/>
        </form>
    </div>
    <div id="header">
        <div class="colHeader">
            <a href="#"><img src="images/logo.png" alt="" id="logo"></a>
        </div>
        <div class="colHeader">
            <button id="loginBtn" onclick="Mostrar()"></button>
            <a href="pages/carrito.html"><button id="carritoBtn"></button></a>
        </div>
    </div>
    <div id="content">
        <img src="images/fondo.jpg" alt="" id="fondo">
        <div id="separador"></div>
        <div id="productosContent">
            <div class="rowProductos">
                <div class="producto" id="prod1" >
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/Anakin.webp" alt="">
                    <p>Anakin</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod1')">Añadir</button>
                        <button onclick="Quitar('prod1')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod2">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/dooku.webp" alt="">
                    <p>Dooku</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod2')">Añadir</button>
                        <button onclick="Quitar('prod2')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod3">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/rex.jpg" alt="">
                    <p>Rex</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod3')">Añadir</button>
                        <button onclick="Quitar('prod3')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod4"> 
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/droideDeBatalla.webp" alt="">
                    <p>Droide de batalla</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod4')">Añadir</button>
                        <button onclick="Quitar('prod4')">Quitar</button>
                    </div>
                </div>
            </div>
            <div class="rowProductos">
                <div class="producto" id="prod5" >
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/kenobi.webp" alt="">
                    <p>Kenobi</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod5')">Añadir</button>
                        <button onclick="Quitar('prod5')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod6">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/maul.jpg" alt="">
                    <p>Maul</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod6')">Añadir</button>
                        <button onclick="Quitar('prod6')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod7">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/clon501.jpg" alt="">
                    <p>Clon 501th</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod7')">Añadir</button>
                        <button onclick="Quitar('prod7')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod8">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/droideComando.jpg" alt="">
                    <p>Droide comando</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod8')">Añadir</button>
                        <button onclick="Quitar('prod8')">Quitar</button>
                    </div>
                </div>
            </div>
            <div class="rowProductos">
                <div class="producto" id="prod9">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/ashoka.webp" alt="">
                    <p>Ashoka</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod9')">Añadir</button>
                        <button onclick="Quitar('prod9')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod10">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/ventress.jpg" alt="">
                    <p>Ventress</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod10')">Añadir</button>
                        <button onclick="Quitar('prod10')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod11">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/cody.webp" alt="">
                    <p>Cody</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod11')">Añadir</button>
                        <button onclick="Quitar('prod11')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod12">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/droideka.jpg" alt="">
                    <p>Droideka</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod12')">Añadir</button>
                        <button onclick="Quitar('prod12')">Quitar</button>
                    </div>
                </div>
            </div>
            <div class="rowProductos">
                <div class="producto" id="prod13">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/yoda.jpg" alt="">
                    <p>Yoda</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod13')">Añadir</button>
                        <button onclick="Quitar('prod13')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod14">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/grievous.jpg" alt="">
                    <p>Grievous</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod14')">Añadir</button>
                        <button onclick="Quitar('prod14')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod15">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/clon212.webp" alt="">
                    <p>Clon 212th </p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod15')">Añadir</button>
                        <button onclick="Quitar('prod15')">Quitar</button>
                    </div>
                </div>
                <div class="producto" id="prod16">
                    <div class="cantidad"><p>x0</p></div>
                    <img src="images/productos/superdroide.jpg" alt="">
                    <p>Superdroide de batalla</p>
                    <p>10.00€</p>
                    <div class="btns">
                        <button onclick="Agregar('prod16')">Añadir</button>
                        <button onclick="Quitar('prod16')">Quitar</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div> 
    <div id="footer"><p>Disclaimer: Página no oficial de Lego©</p></div>

    

</body>
</html>