// Encargar Productos para Mantener Stock




const compra = document.querySelector("#compra");

class Stock {
    constructor(nombre, modelo, cantidad) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.cantidad = cantidad;
    }
}

let divStocking = document.querySelector("#stocking");
let listaStock = [];

const agregarProducto = () => {
    let nombre = document.getElementById("nombre").value;
    let modelo = document.getElementById("modelo").value;
    let cantidad = document.getElementById("cantidad").value;

    let stockNuevo = new Stock(nombre, modelo, cantidad);

    if (localStorage.getItem("consolas") != null) {
    let storage = JSON.parse(localStorage.getItem("consolas"))
    storage.push(stockNuevo)
    localStorage.setItem("consolas", JSON.stringify(storage));
    } else {
        listaStock.push(stockNuevo);
        localStorage.setItem("consolas", JSON.stringify(listaStock));
    }
    
    return listaStock;
}

compra.onsubmit = (e) => {
    e.preventDefault();
    agregarProducto();
}

const pintarPedido = () => {
    const pedidoStorage = JSON.parse(localStorage.getItem("consolas"));

    pedidoStorage.forEach(consolas => {
        divStocking.innerHTML += `
                        <div>
                            <h3>Consola: ${consolas.nombre}</h3>
                            <h4>Modelo o Serie: ${consolas.modelo}</h4>
                            <p>Cantidad: ${consolas.cantidad}</p>
                        </div>
        `
    });
}
//pintarPedido para visualizar mi pedido en DOM 

