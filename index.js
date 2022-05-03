/**
 * Creado por: Rangel Diaz Luis Fernando
 * mail: luis.rangeldiaz@gmail.com
 * 2022-02
 */

import { relojPantalla } from "./js/timer.js";


// const api_url = 'http://180.176.105.108/API-sd-wanEncuesta/';
const encuesta = document.querySelector('.encuesta');
const preguntas = document.querySelector('#preguntas');
const pregunta1 = document.querySelector('#pregunta1');
const pregunta2 = document.querySelector('#pregunta2');
const pregunta3 = document.querySelector('#pregunta3');
const pregunta4 = document.querySelector('#pregunta4');
// const message = document.querySelector('#message');
// const ckx = document.querySelector('#ckx');
const frmEncuesta = document.querySelector('#frm_encuesta');


const msg1 = document.querySelector('#msg_1');
const msg2 = document.querySelector('#msg_2');
const msg3 = document.querySelector('#msg_3');
const msg4 = document.querySelector('#msg_4');

const persona = document.getElementById('participante');
// const divCeco = document.querySelector('.sucursal')
const encuestado = document.getElementById('encuestado');
const mail = document.getElementById('mail');
const input1 = document.getElementById('q1');
const input2 = document.getElementById('q2');
const input3 = document.getElementById('q3');
const input4 = document.getElementById('q4');
const velocidad = document.getElementById('velocidad');
const fecha = document.getElementById('fecha');

const opciones = (calif, elem)=>{
    if (calif == "1") {
        elem.innerHTML = 'Muy insatisfecho';
    } else if (calif == "2") {
        elem.innerHTML = 'Insatisfecho';
        
    }else if (calif == "3") {
        elem.innerHTML = 'Indiferente';
        
    }else if (calif == "4") {
        elem.innerHTML = 'Satisfecho';
        
    }else if (calif == "5") {
        elem.innerHTML = 'Muy satisfecho';
        
    } else {
        elem.innerHTML = '';
    }
}

relojPantalla();

pregunta1.addEventListener('click', (e)=>{
    const calificacion = e.target.attributes[2].nodeValue;
    input1.value = calificacion;
    
    let sp1 = document.createElement('div');
    
    sp1.setAttribute('class', 'emojis');
    sp1.setAttribute('id', 'pregunta1');
    
    let sp1_img = document.createElement('img');
    sp1_img.src = `./assets/img/emojis/FX00${calificacion}_1.png`;
    
    sp1_img.className = 'select-emojis';
    sp1_img.alt = 'on';
    
    sp1.appendChild(sp1_img);

    let parentDiv = pregunta1.parentNode;

    parentDiv.replaceChild(sp1,pregunta1);
    
    opciones(calificacion, msg1);

})

pregunta1.addEventListener('mouseover', (e)=>{
    const msg_1 = e.target.attributes[2].nodeValue
    opciones(msg_1, msg1);
})

pregunta1.addEventListener('mouseout', (e)=>{
        msg1.innerHTML = '';
})



pregunta2.addEventListener('click', (e)=>{
    const calificacion = e.target.attributes[2].nodeValue
    input2.value = calificacion;
    
    let sp1 = document.createElement('div');
    
    sp1.setAttribute('class', 'emojis');
    sp1.setAttribute('id', 'pregunta2');
    
    let sp1_img = document.createElement('img');
    sp1_img.src = `./assets/img/emojis/FX00${calificacion}_1.png`;
    
    sp1_img.className = 'select-emojis';
    sp1_img.alt = 'on';
    
    sp1.appendChild(sp1_img);

    let parentDiv = pregunta2.parentNode;

    parentDiv.replaceChild(sp1,pregunta2);

    opciones(calificacion, msg2);

})

pregunta2.addEventListener('mouseover', (e)=>{
    const msg_2 = e.target.attributes[2].nodeValue;
    opciones(msg_2, msg2);
    
})

pregunta2.addEventListener('mouseout', (e)=>{
    msg2.innerHTML = '';
})

pregunta3.addEventListener('click', (e)=>{
    const calificacion = e.target.attributes[2].nodeValue
    input3.value = calificacion;
    
    let sp1 = document.createElement('div');
    
    sp1.setAttribute('class', 'emojis');
    sp1.setAttribute('id', 'pregunta3');
    
    let sp1_img = document.createElement('img');
    sp1_img.src = `./assets/img/emojis/FX00${calificacion}_1.png`;
    
    sp1_img.className = 'select-emojis';
    sp1_img.alt = 'on';
    
    sp1.appendChild(sp1_img);

    let parentDiv = pregunta3.parentNode;

    parentDiv.replaceChild(sp1,pregunta3);
    
    opciones(calificacion, msg3);

})


pregunta3.addEventListener('mouseover', (e)=>{
    const msg_3 = e.target.attributes[2].nodeValue
    
    opciones(msg_3, msg3);   
    
})

pregunta3.addEventListener('mouseout', (e)=>{
    msg3.innerHTML = '';
})


/**/
pregunta4.addEventListener('click', (e)=>{
    const calificacion = e.target.attributes[2].nodeValue
    input4.value = calificacion;
    
    let sp1 = document.createElement('div');
    
    sp1.setAttribute('class', 'emojis');
    sp1.setAttribute('id', 'pregunta4');
    
    let sp1_img = document.createElement('img');
    sp1_img.src = `./assets/img/emojis/FX00${calificacion}_1.png`;
    
    sp1_img.className = 'select-emojis';
    sp1_img.alt = 'on';
    
    sp1.appendChild(sp1_img);

    let parentDiv = pregunta4.parentNode;

    parentDiv.replaceChild(sp1,pregunta4);

    opciones(calificacion, msg4);

})


pregunta4.addEventListener('mouseover', (e)=>{
    const msg_4 = e.target.attributes[2].nodeValue
    opciones(msg_4, msg4);   
    
})

pregunta4.addEventListener('mouseout', (e)=>{
    msg4.innerHTML = '';
})


persona.addEventListener('focusout', (e)=>{
    let personatxt = persona.value;
    let validatxt = `${personatxt}`.toString();
    let prlt = validatxt.toString()
    let lcc = prlt.length;

    if (personatxt == '' || personatxt == null || lcc > 30) {
        alert('El Nombre del participante no puede superar los 30 caracteres o estar vacio');
    }else{
        encuestado.value = personatxt;
    }
})

frmEncuesta.addEventListener('submit', (e)=>{
    e.preventDefault()
    if (input4.value == '' || input4.value == null) {
        alert('No ha contestado la pregunta 1')
    } else if (input1.value == '' || input1.value == null) {
        alert('No ha contestado la pregunta 2')
    } else if (input2.value == '' || input2.value == null) {
        alert('No ha contestado la pregunta 3')
    } else if (input3.value == '' || input3.value == null) {
        alert('No ha contestado la pregunta 4')
    } else if (encuestado.value == '' || encuestado.value == null) {
        alert('No ha ingresado su Nombre')
    } else if (mail.value == '' || mail.value == null) {
        alert('No ha ingresado su Correo Electronico')
    } else if (velocidad.value == '' || velocidad.value == null) {
        alert('No ha ingresado la velocidad de internet')
    } else if (fecha.value == '' || fecha.value == null) {
        alert('Indique la fecha de la encuesta')
    }

    let datos = {
        "nombre" : encuestado.value,
        "correo" : mail.value,
        "q1" : input1.name,
        "r1" : input1.value,
        "q2" : input2.name,
        "r2" : input2.value,
        "q3" : input3.name,
        "r3" : input3.value,
        "q4" : input4.name,
        "r4" : input4.value,
        "velocidad" : velocidad.value,
        "fecha" : fecha.value,
    }

    let bodyContent = JSON.stringify(datos);
    fetch('./ajax/respuesta.php', { 
        method: "POST",
        headers : {
            "Content-type": "application/json;"
        },
        body: bodyContent})
      .then((response)=>response.json())
      .then((data)=>{
          console.log('Datos de respuesta PHP: ');
          console.log(data);
      })

})
