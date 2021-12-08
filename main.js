function fuguClienteEnvio(nombre, mail, telefono, domicilio) {
    this.nombre = nombre;
    this.mail = mail;
    this.telefono = telefono;
    this.domicilio = domicilio;
}

let fuguRemeras = [
    {
        id: 1,
        nombre: "Aerosmith",
        precio: 2300,
        imagen: "./imagenes/aero.jpg",
    },
    {
        id: 2,
        nombre: "Dude",
        precio: 2100,
        imagen: "./imagenes/dude.jpg",
    },
    {
        id: 3,
        nombre: "Beasty Boys",
        precio: 1850,
        imagen: "./imagenes/beasty.jpg",
    },
];

let fuguCuadros = [
    {
        id: 4,
        nombre: "Ramones",
        precio: 1300,
        imagen: "./imagenes/cuadro1.jpg",
    },
    {
        id: 5,
        nombre: "Joker",
        precio: 1350,
        imagen: "./imagenes/cuadro2.jpg",
    },
    {
        id: 6,
        nombre: "Kurt",
        precio: 1100,
        imagen: "./imagenes/cuadro3.jpg",
    },
];

let fuguTazas = [
    {
        id: 7,
        nombre: "Believe",
        precio: 850,
        imagen: "./imagenes/believe.jpg",
    },
    {
        id: 8,
        nombre: "Ice",
        precio: 850,
        imagen: "./imagenes/ice.jpg",
    },
    {
        id: 9,
        nombre: "Vintage",
        precio: 950,
        imagen: "./imagenes/dibu.jpg",
    },
];

const carrito = [];
const formulario = [];
const add = document.getElementById ("add");
const cart = document.getElementById ("cart");

let modalCarrito = document.getElementById("cart");

const cargarFuguRemeras = () => {
    let containerRemeras = document.getElementById("contenedorRemeras");
    containerRemeras.innerHTML = "";

    fuguRemeras.forEach((remera, indice) => {
        let card = document.createElement("div");
        card.classList.add("card", "col-lg-3", "bg-light");
        let html = `
        <div class="card-body">
            <img src="${remera.imagen}" class="card-img-top" alt="...">
            <h5 class="card-title">${remera.nombre}</h5>
            <p class="card-text">${remera.precio}</p>
            <a href="#" class="btn btn-danger" onClick="abrirRemeraCarrito(${indice})">Comprar</a>
        </div>
        `;
        card.innerHTML = html;
        containerRemeras.appendChild(card);
    });
};

const cargarFuguCuadros = () => {
    let containerCuadros = document.getElementById("contenedorCuadros");
    containerCuadros.innerHTML = "";

    fuguCuadros.forEach((cuadro, indice) => {
        let card = document.createElement("div");
        card.classList.add("card", "col-sm-6", "col-lg-3", "bg-light");
        let html = `
        <div class="card-body">
            <img src="${cuadro.imagen}" class="card-img-top" alt="...">
            <h5 class="card-title">${cuadro.nombre}</h5>
            <p class="card-text">${cuadro.precio}</p>
            <a href="#" class="btn btn-danger" onClick="abrirCuadroCarrito(${indice})">Comprar</a>
        </div>
        `;
        card.innerHTML = html;
        containerCuadros.appendChild(card);
    });
};

const cargarFuguTazas = () => {
    let containerCuadros = document.getElementById("contenedorTazas");
    containerCuadros.innerHTML = "";

    fuguTazas.forEach((taza, indice) => {
        let card = document.createElement("div");
        card.classList.add("card", "col-sm-6", "col-lg-3", "bg-light");
        let html = `
        <div class="card-body">
            <img src="${taza.imagen}" class="card-img-top" alt="...">
            <h5 class="card-title">${taza.nombre}</h5>
            <p class="card-text">${taza.precio}</p>
            <a href="#" class="btn btn-danger" onClick="abrirTazaCarrito(${indice})">Comprar</a>
        </div>
        `;
        card.innerHTML = html;
        containerCuadros.appendChild(card);
    });
};

const abrirRemeraCarrito = (indiceDelArrayProducto) => {
    const indiceEncontradoCarrito = carrito.findIndex((elemento) => {
    return elemento.id === fuguRemeras[indiceDelArrayProducto].id;
    });
    if (indiceEncontradoCarrito === -1) {
        const remeraAgregar = fuguRemeras[indiceDelArrayProducto];
        remeraAgregar.cantidad = 1;
        carrito.push(remeraAgregar);
        actualizarCarrito();
        } else {
            carrito[indiceEncontradoCarrito].cantidad += 1;
            actualizarCarrito();
        }
};

const abrirCuadroCarrito = (indiceDelArrayProducto) => {
    const indiceEncontradoCarrito = carrito.findIndex((elemento) => {
    return elemento.id === fuguCuadros[indiceDelArrayProducto].id;
    });
    if (indiceEncontradoCarrito === -1) {
        const cuadroAgregar = fuguCuadros[indiceDelArrayProducto];
        cuadroAgregar.cantidad = 1;
        carrito.push(cuadroAgregar);
        actualizarCarrito();        
        } else {
            carrito[indiceEncontradoCarrito].cantidad += 1;
            actualizarCarrito();
        }
};

const abrirTazaCarrito = (indiceDelArrayProducto) => {
    const indiceEncontradoCarrito = carrito.findIndex((elemento) => {
    return elemento.id === fuguTazas[indiceDelArrayProducto].id;
    });
    if (indiceEncontradoCarrito === -1) {
        const tazaAgregar = fuguTazas[indiceDelArrayProducto];
        tazaAgregar.cantidad = 1;
        carrito.push(tazaAgregar);
        actualizarCarrito();        
        } else {
            carrito[indiceEncontradoCarrito].cantidad += 1;
            actualizarCarrito();
        }
};

const actualizarCarrito = () => {
    let total = 0;
    modalCarrito.className = "cart";
    modalCarrito.innerHTML = "";
    
    if (carrito.length == ""){
        modalCarrito.innerHTML = "";
        const carritoVacio = `  
            <h2 class="gracias"> CARRITO VACIO</h2>`
        modalCarrito.innerHTML = carritoVacio;
        }
        else {
            carrito.forEach((producto, indice) => {
            total = total + producto.precio * producto.cantidad;
            const carritoContainer = document.createElement("div");
            carritoContainer.innerHTML = `
                <img class="car-img" src="${producto.imagen}"/>
                <div class="product-details">
                    ${producto.nombre}
                </div>
                <div class="product-details" > Cantidad: ${producto.cantidad}</div>
                <div class="product-details"> Precio: $ ${producto.precio}</div>
                <div class="product-details"> Subtotal: $ ${
            producto.precio * producto.cantidad
            }
                </div>
                <button class="btn btn-warning"  id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>
            `;
        modalCarrito.appendChild (carritoContainer);
});

const totalContainer = document.createElement("div");
    totalContainer.innerHTML = `
        <div class= "total">TOTAL $${total}</div>
        <button class="btn btn-warning seguirComprando id="seguir" onClick="seguirCompra()">SEGUIR COMPRANDO</button>
        <button class= "btn btn-warning finalizar" id="finalizar" onClick="finalizarCompra()">FINALIZAR COMPRA</button>`;
        modalCarrito.appendChild(totalContainer);
    } 
};

const seguirCompra = () => {
    cart.classList.remove ("show")
};

const finalizarCompra = () => {
    const total = document.getElementsByClassName("total")[0].innerHTML;
    modalCarrito.innerHTML = "";
    const compraFinalizada = `
        <div class="compra-finalizada">
            <p class="compra-parrafo">TU FUGU COMPRA ES ${total}</p>
        </div>
        <div class="datos-cliente">
            <p class="datos-parrafo">Ingresa tus Datos para Finalizar el Pedido</p>
            <button class= "btn btn-danger formulario" id="formulario" onClick="datosDeFac()">FUGU CLIENTE</button>
        </div>`;
    modalCarrito.innerHTML = compraFinalizada;
    console.log (carrito);
    localStorage.setItem ("fuguProductos", JSON.stringify(carrito));
};

const datosDeFac = () => {
    modalCarrito.innerHTML = "";
    const formulario = `  
    <div class="finCompra">
        <h2> DATOS PARA EL ENVÍO </h2> 
            <div class="contact__secction-container">
                <div class="row">
                    <div class="contact__secction__item">
                        <label>Nombre</label>
                        <input type="text" id="nombre" placeholder="Nombre"/>
                    </div>
                    <div class="contact__secction__item">
                        <label>E-mail</label>
                        <input type="text" id="mail" placeholder="E-mail"/>
                    </div>
                    <div class="contact__secction__item">
                        <label>Telefono</label>
                        <input type="text" id="telefono" placeholder="Telefono"/>
                    </div>
                    <div class="contact__secction__item">
                        <label>Domicilio</label>
                        <input type="text" id="domicilio" placeholder="Domicilio"/>
                    </div>
                    <div class="contact-button">
                        <button type="button" class="btn btn-danger envio" onClick="datosDeEnvio()">Confirmar</button>
                    </div>
                </div>
            </div>
    </div>`;
    modalCarrito.innerHTML = formulario;
};

const datosDeEnvio = () => {
    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("mail").value;
    let telefono = document.getElementById("telefono").value;
    let domicilio = document.getElementById("domicilio").value;
    let cliente = new fuguClienteEnvio(nombre, mail, telefono, domicilio);
    modalCarrito.innerHTML = "";
    const graciasCompra = `  
        <h2 class="gracias">GRACIAS POR TU COMPRA</h2>`
    modalCarrito.innerHTML = graciasCompra;
    console.log(cliente);
}

const removeProduct = (indice) => {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

add.addEventListener ("click", () => {
    cart.classList.add ("show")
});




