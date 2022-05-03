export const relojPantalla = ()=>{
    const dateSystem = new Date();
    const tiempo = document.querySelector('#hora');

    let hora = dateSystem.getHours(),
        min = dateSystem.getMinutes(),
        seg = dateSystem.getSeconds(),
        hr = '',
        hr_txt = '';
        
        hr = `${hora}`.toString();
        min = `${min}`.toString();
        seg = `${seg}`.toString();

        hr = hr.padStart(2, '0');
        min = min.padStart(2, '0');
        seg = seg.padStart(2, '0');

        if (hora < 12) {
            hr_txt = 'Buenos dias: ';
        } else if (hora >= 12 && hora < 19) {
            hr_txt = 'Buenas Tardes: ';
        } else {
            hr_txt = 'Buenas Noches: ';
        }

        tiempo.innerHTML = `${hr_txt} ${hr}:${min}:${seg}`;

        // console.log(`${hr}:${min}:${seg}`);
        
        setTimeout(() => {
            relojPantalla();
        }, 1000);
}
