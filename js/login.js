form = document.getElementById("pass_id");
login_btn = document.getElementById('login_btn');
input = document.getElementById('input_box');

form.onsubmit = (e)=>{
    e.preventDefault();
    console.log("jiji");
}


login_btn.onclick = ()=>{
    // Ajax
    console.log("Login");
    let xhr = new XMLHttpRequest(); // Crear el XML object
    xhr.open("POST","php/login.php",true);
    xhr.onload = ()=>{
        if (xhr.readyState === XMLHttpRequest.DONE){
            if (xhr.status === 200){
                let data = xhr.response;
                if (data == "success"){
                    location.href = "chat.php";
                }
                else {
                    //input.style.animation = 'shake 0.7s linear 1, glow-red 0.35s linear 2';
                    console.log("Incorrecta");
                    //input.style.animation = 'shake 0.7s linear 1, glow-red 0.35s linear 2';
                    
                    $(input).removeClass("input_class");
                    setTimeout(function(){
                        $(input).addClass("input_class");
                    })
                    input.value = '';
                    console.log("addfsdfsf");                 
                }
            }
        }
    }
    console.log("Idir hizo clic? ",idir_done);
    let formData = new FormData(form);
    if (idir_done){
        formData.append("username","Idir a secas");
    }
    else if (nihel_done){
        formData.append("username","Nihiliskbm");
    }
    console.log(formData);
    xhr.send(formData);
}