<?php
    include_once "config.php";
    $username = mysqli_real_escape_string($conn,$_POST['username']);
    $password = mysqli_real_escape_string($conn,$_POST['password']);
    if (!empty($password)){
        $sql = mysqli_query($conn,"SELECT * FROM usuario WHERE nombre_usuario= '{$username}' AND contraseña='{$password}'");
        if (mysqli_num_rows($sql) > 0){
            $row = mysqli_fetch_assoc($sql);
            $_SESSION['id_unico'] = $row['id_unico'];
            echo "success";
        }
        else {
            echo "Contraseña incorrecta!";
        }
    }
    else {
        echo "Tienes que incluir la contraseña";
    }
?>