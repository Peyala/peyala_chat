let idir_done = false;
var nihel_done = false;

function startAnimationIdir(){
    console.log(idir_done);
    if (nihel_done == true) return;
    const drch = document.getElementById('nihel');
    const izq = document.getElementById('idir');
    const pass = document.getElementById('pass_id');
    const input = document.getElementById('input_box');
    const btn = document.getElementById('login_btn');
    drch.style.opacity = '0';
    drch.style.transform = 'scale(0.80,0.80) translate(-85%,-35%)';
    izq.style.transform = 'scale(0.80,0.80) translate(85%,-35%)';
    pass.style.opacity = '1';
    pass.style.transform = 'translate(0%,-250%)';
    drch.style.cursor = 'default';
    izq.style.cursor = 'default';
    input.style.cursor = 'text';
    btn.style.cursor = 'pointer';
    input.disabled = false;
    btn.disabled = false;
    idir_done = true;
    console.log("hola");
    
}

function startAnimationNihel(){
    if (idir_done == true) return;
    const drch = document.getElementById('nihel');
    const izq = document.getElementById('idir');
    const pass = document.getElementById('pass_id');
    const input = document.getElementById('input_box');
    const btn = document.getElementById('login_btn');
    izq.style.opacity = '0';
    drch.style.transform = 'scale(0.80,0.80) translate(-88%,-35%)';
    izq.style.transform = 'scale(0.80,0.80) translate(88%,-35%)';
    pass.style.opacity = '1';
    pass.style.transform = 'translate(0%,-250%)';
    drch.style.cursor = 'default';
    izq.style.cursor = 'default';
    input.style.cursor = 'text';
    btn.style.cursor = 'pointer';
    input.disabled = false;
    btn.disabled = false;
    nihel_done = true;
}