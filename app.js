const DATOS = {
    nombredelnegocio: "Café de las Llanuras",
    eslogan: "Menu digital",
    numero: "+57 302 8432795",
    whatsapp: "573028432795",
    direccion: "Cra 1 # 2-3 ",
    lema: "Café que te llega al alma",
    platos:[
        {
            id: 1,
            categoria: "Cafés",
            nombre: "Latte",
            precio: 10000,
            img:"https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=449&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D?w500"
        },
        {
            id: 2,
            categoria: "Cafés",
            nombre: "Cappuccino",
            precio: 10000,
            img:"https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D?w500"
        },
        {
            id: 3,
            categoria: "Panes",
            nombre: "baguette",
            precio: 10000,
            img:"https://images.unsplash.com/photo-1559811814-e2c57b5e69df?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D?w500"
        },
        {
            id: 4,
            categoria: "Panes",
            nombre: "pan sin gluten",
            precio: 10000,
            img:"https://plus.unsplash.com/premium_photo-1675788939058-850af470cd36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D?w500"
        },
        {
            id: 5,
            categoria: "Bebidas frías",
            nombre: "Refrescos",
            precio: 10000,
            img:"https://plus.unsplash.com/premium_photo-1725075086083-89117890371d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D?w500"
        }
    ]
};

let categoriaactual = "Todas";
const formato = (n) => "$" + n.toLocaleString("es-CO")

function encabezado() {
    document.getElementById("nombredelnegocio").textContent = DATOS.nombredelnegocio;
    document.getElementById("eslogan").textContent = DATOS.eslogan;
    document.title = DATOS.nombredelnegocio;
}

function category() {
    const categorias = ["Todas", ...new Set(DATOS.platos.map(p => p.categoria))]
    document.getElementById ("barradecategorias").innerHTML = categorias.map(cat => `
        <button class="cat-btn ${cat === categoriaactual ? "activo" : ""}" onclick="cambiarcategorias('${cat}')">${cat}</button>
    `).join("");
}

function cambiarcategorias(cat) {
    categoriaactual = cat;
    category();
    menu();
}

function menu() {
    const lista = categoriaactual === "Todas"
        ? DATOS.platos
        : DATOS.platos.filter((p) => p.categoria === categoriaactual)
    document.getElementById("grillamenu").innerHTML = lista.map((p)=>`
        <div class="card">
            <h3>${p.nombre}</h3>
            <img src="${p.img}" alt="${p.nombre}">
            <p>${formato(p.precio)}</p>
        </div>
    `).join("");
}

function descripcion() {
    document.getElementById("direccion").textContent = DATOS.direccion
    document.getElementById("numero").textContent =DATOS.numero;
    document.getElementById("eslogan2").textContent =DATOS.lema;
}

encabezado();
category();
menu();
descripcion();
