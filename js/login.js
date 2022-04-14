form = document.getElementById("pass_id");
login_btn = document.getElementById('login_btn');

form.onsubmit = (e)=>{
    e.preventDefault();
    console.log("jiji")}


login_btn.onclick = ()=>{
    // Ajax
    console.log("Login");
    let xhr = new XMLHttpRequest(); // Crear el XML object
    xhr.open("POST","php/login.php",true);
    xhr.onload = ()=>{

    }
    xhr.send();
}