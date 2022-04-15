form = document.getElementById("pass_id");
login_btn = document.getElementById('login_btn');
input = document.getElementById('input_box');

form.onsubmit = (e)=>{
    e.preventDefault();
    console.log("jiji");
}

input.onclick = ()=>{
    console.log('aaa');
}

login_btn.onclick = ()=>{
    // Ajax
    sleep(1000);
    num = Math.random();
    if (num < 0.5){
        console.log("Contraseña incorrecta");
        input.style.animation = 'shake 0.7s linear 1, glow-red 0.35s linear 2';
    }
    else{
        console.log("Aceptado");
    }
    console.log("Login");
    /*
    let xhr = new XMLHttpRequest(); // Crear el XML object
    xhr.open("POST","php/login.php",true);
    xhr.onload = ()=>{

    }
    xhr.send();
    */
}