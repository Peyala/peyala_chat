<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Peyala Chat</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Bellota&display=swap" rel="stylesheet">
    <style>
        .ola svg{
            position: absolute;
            width: 100%;
            left: 0;
            bottom: 0;
            z-index: -10;
        }
    </style>
</head>

<body>
    <h1>Peyala Chat</h1>
    <section class="global">
        <section class="iconos">
            <figure class="izq" id="idir" onclick="startAnimationIdir()">
                <img class="izq" id="idir_ico" src="img/man2.png" alt="Perfil de Idir" width="200">
                <span class="caption">Idir</span>
            </figure>
            <figure class="drch" id="nihel" onclick="startAnimationNihel()">
                <img class="drch" id="nihel_ico" src="img/woman2.png" alt="Perfil de Nihel" width="200">
                <span class="caption">Nihel</span>
            </figure>
            
        </section>
        <form class="pass" id="pass_id" action="#">    <!-- form estaba antes, posible cambio --> 
            <input id="input_box" disabled type="password" placeholder="Contraseña">
            <div class="wrap">
                <button id="login_btn" disabled class="button">LOGIN</button>
            </div>
        </form>
        <div class="ola" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#191727" fill-opacity="0.95" d="M0,0L48,42.7C96,85,192,171,288,170.7C384,171,480,85,576,85.3C672,85,768,171,864,208C960,245,1056,235,1152,240C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
        </div>
    </section>
    <div class="wave w1"></div>
    <div class="wave w2"></div>
    
</body>
<script src="js/scripts.js"></script>
<script src="js/login.js"></script>
</html>