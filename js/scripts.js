function startAnimationIdir(){
    const drch = document.getElementById('nihel');
    const izq = document.getElementById('idir');
    const pass = document.getElementById('pass_id');
    drch.style.opacity = '0';
    drch.style.transform = 'scale(0.80,0.80) translate(-85%,-20%)';
    izq.style.transform = 'scale(0.80,0.80) translate(85%,-20%)';
    pass.style.opacity = '1';
    pass.style.transform = 'translate(0%,-250%)';
}

function startAnimationNihel(){
    const drch = document.getElementById('nihel');
    const izq = document.getElementById('idir');
    const pass = document.getElementById('pass_id');
    izq.style.opacity = '0';
    izq.style.transform = 'scale(0.80,0.80) translate(85%,-20%)';
    drch.style.transform = 'scale(0.80,0.80) translate(-85%,-20%)';
    pass.style.opacity = '1';
    pass.style.transform = 'translate(0%,-250%)';
}