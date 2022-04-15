<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-control" content="no-cache"> <!-- PARA ACTUALIZAR INSTANT-->
    <title>Peyala Chat</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Bellota&display=swap" rel="stylesheet">
    
</head>

<body>


    <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
</div>
    
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
        <form class="pass" id="pass_id" action="#">
            <input class="input_class" id="input_box" name="password" disabled required type="password" placeholder="Password">
            <div class="wrap">
                <button id="login_btn" disabled class="button">LOGIN</button>
            </div>
        </form>
    </section>
</body>
<script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>
<script src="js/scripts.js"></script>
<script src="js/login.js"></script>
</html>