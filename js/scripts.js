let idir_done = new Boolean(false);
var nihel_done = new Boolean(false);

function startAnimationIdir(){
    console.log(idir_done);
    if (nihel_done == true) return;
    const drch = document.getElementById('nihel');
    const izq = document.getElementById('idir');
    const pass = document.getElementById('pass_id');
    drch.style.opacity = '0';
    drch.style.transform = 'scale(0.80,0.80) translate(-85%,-35%)';
    izq.style.transform = 'scale(0.80,0.80) translate(85%,-35%)';
    pass.style.opacity = '1';
    pass.style.transform = 'translate(0%,-250%)';
    drch.style.cursor = 'default';
    izq.style.cursor = 'default';
    idir_done = true;
    
}

function startAnimationNihel(){
    if (idir_done == true) return;
    const drch = document.getElementById('nihel');
    const izq = document.getElementById('idir');
    const pass = document.getElementById('pass_id');
    izq.style.opacity = '0';
    drch.style.transform = 'scale(0.80,0.80) translate(-88%,-35%)';
    izq.style.transform = 'scale(0.80,0.80) translate(88%,-35%)';
    pass.style.opacity = '1';
    pass.style.transform = 'translate(0%,-250%)';
    drch.style.cursor = 'default';
    izq.style.cursor = 'default';
    nihel_done = true;
}