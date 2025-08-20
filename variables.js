let contador;

const documento = 39150005;

let edad = 17;
let acceso = '';

if (edad < 16) {
    acceso = 'prohibido';

} else if (edad >= 16 && edad <= 18){
    acceso = 'permitido solo acompañado por un mayor';

} else{
    acceso = 'permitido';
}


console.log(acceso);