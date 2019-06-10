var btnarea = document.querySelector("#area");
console.log(btnarea);
btnarea.addEventListener('click', area);

function area() {
    var inputbase = document.querySelector('#base');
    var inputaltura = document.querySelector('#altura');

    var resultado = Number ((inputbase.value) * Number (inputaltura.value)) / 2;

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}