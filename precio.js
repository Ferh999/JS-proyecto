const PS5 = 348000
const XBox = 302000
const Switch = 130000
let seleccioneConsola = false


do {
let consola = prompt("Elegí tu Consola PS5, XBox o Switch");


if (consola.toUpperCase() == "PS5") {
    alert("Valor $" + PS5);
    seleccioneConsola = false
    precio1 = 348000;
} else if (consola.toUpperCase() == "XBOX") {
    alert("valor $" + XBox);
    seleccioneConsola = false
    precio1 = 302000;
} else if (consola.toUpperCase() == "SWITCH") {
    alert("Valor $" + Switch);
    seleccioneConsola = false
    precio1 = 130000;
} else {
    alert("Elija otra consola por favor");
    seleccioneConsola = true
}
}while (seleccioneConsola)



let cantidad = 0;
let Joystick = 28000
let continuarCompra = false;
let subTotal = 0;

do {
    cantidad = Number(prompt("Elige la cantidad de controles Extra. 1, 2 o 3"));
    
    switch(cantidad) {
        case 1:
            alert("Seleccionó 1 Joystick extra por un valor de $" + Joystick);
            precio2 = Joystick
            break;
        case 2:
            alert("Seleccionó 2 Joysticks extra por un valor de $" + (Joystick)*2);
            precio2 = (Joystick)*2
            break;
        case 3:
            alert("Seleccionó 3 Joysticks extra por un valor de $" + (Joystick)*3);
            precio2 = (Joystick)*3
            break;
        default:
            alert("Sin extras");
            precio2 = Joystick*0
            break;    
    }subTotal += precio1 + precio2
    alert(`El total de la compra sin envío es de $${subTotal}`);
}while (continuarCompra)


let cupon = prompt("Escriba el código para recibir un descuento");

if(cupon == "coder".toLowerCase()) {
    alert("El codigo es correcto, recibiras un descuento del 5%");
    desc = subTotal*5/100
}else {
    alert("codigo incorrecto");
    desc = subTotal*0
}


let envio = 0;
let CABA = 500
let GBA = 1000
let Interior = 2000
let total = 0;
let finalizarCompra = false;

do {
    envio = prompt("De que zona sos, CABA, GBA o Interior?")

    switch(envio.toUpperCase()) {
        case "CABA":
            alert(`El costo de Envio a Capital Federal es $${CABA}`);
            precio3 = CABA
            break;
        case "GBA":
            alert(`El costo de Envio a Gran Buenos Aires es $${GBA}`);
            precio3 = GBA
            break;
        case "INTERIOR":
            alert(`El costo de Envio al Interior es $${Interior}`);
            precio3 = Interior
            break;
        default:
            alert("Retira por Local");
            precio3 = 0
            break;
    }total += precio1 + precio2 + precio3 - desc
    alert("El total de su Compra más Envío es de $" + total);
}while (finalizarCompra)

let pago = false
do {
let metodoPago = prompt("Cómo vas a Pagar?");

switch(metodoPago.toLowerCase()) {
    case "efectivo":
        alert(`Abona con ${metodoPago} un total de $${total}`);
        pago = false
        break;
    case "tarjeta":
        alert(`Abona con ${metodoPago} un total de $${total}`);
        pago = false
        break;
    case "mercado pago":
        alert(`Abona con ${metodoPago} un total de $${total}`);
        pago = false
        break;
    default:
        alert(`No aceptamos ${metodoPago}`);
        pago = true         
} 
}while (pago)
saludo = prompt("Muchas Gracias por su Compra, Vuelva Prontos!");