// Función para mostrar todos los productos disponibles
let contador = 1;
function addItem(item) {
    const itemHTML = `
    <div class="col" id="">
        <div class="card">
            <img class = "ImgProdCat" src="${item.img}" alt="..." >
            <div class="btnCategoriaCard">
                <div>
                    <button type="button" class="btn btn-light btnAgregar" data-toggle=modal data-target="#staticBackdrop">Ver detalles</button>
                </div>
                <div class="botonAgregar">
                    <button type="button" class="btn btn-dark" onclick="">Agregar</button>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title" id="nameProduct${contador}">${item.name}</h5>
                <p class="card-text-description">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </p>
                <p class="card-text-cost">${item.cost}</p>
            </div>
        </div>
    </div>`;
        
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
    contador++;
} // function addItem(item)

// Productos agregados
addItem({
    'id' : '1',
    'name':'Bandeja para alimentos diseño de conejo',
    'img':'http://drive.google.com/uc?export=view&id=1AR8JwB550-WC_rvKv0SH7HPICBcujJ12',
    'category' : 'Cocina',
    'cost' :'$250 mxn',
    'description':'100% de madera, medidas 30 cm x 30 cm'
});
addItem({
    'id' : '2',
    'name':'Bandeja para alimentos diseño de pato',
    'img':'http://drive.google.com/uc?export=view&id=1AnYqbyLJ2Mo9l4ncyEGkpFmHWcZsz5so',
    'category' : 'Cocina',
    'cost' :'$250 mxn',
    'description':'100% de madera, medidas 30 cm x 30 cm'
});
addItem({
    'id' : '3',
    'name':'Bandeja para alimentos diseño de rana',
    'img':'http://drive.google.com/uc?export=view&id=1AjsRsfP7NjgjIF7AfrErk4SqVVr-mWId',
    'category' : 'Cocina',
    'cost' :'$250 mxn',
    'description':'100% de madera, medidas 30 cm x 30 cm'
});
addItem({
    'id' : '4',
    'name':'Porta Cervezas',
    'img':'http://drive.google.com/uc?export=view&id=1CLr3ydKpRndh1AEL38007UnVQ4UYRCHP',
    'category' : 'Varios',
    'cost' :'$200 mxn',
    'description':'100% de madera'
});
addItem({
    'id' : '5',
    'name':'Estante de almacenamiento',
    'img':'http://drive.google.com/uc?export=view&id=1BZtmYypgzRlKiicmtqGg2p97xdT3vuHy',
    'category' : 'Decoración',
    'cost' :'$450 mxn',
    'description':'Estante para artículos varios, medidas 70 cm x 150 cm'
});
addItem({
    'id' : '6',
    'name':'Base para audífonos',
    'img':'http://drive.google.com/uc?export=view&id=19cgOR5I0x26Qxra0f3EbVsvacpdEm9dw',
    'category' : 'Decoración',
    'cost' :'$500 mxn',
    'description':'100% madera, medidas 25 cm x 15 cm'
})
addItem({
    'id' : '7',
    'name':'Bandeja para despicar hierbas',
    'img':'http://drive.google.com/uc?export=view&id=1BKNTj5hICy-YmiveV4_7TTALPwlvCB70',
    'category' : 'Cocina',
    'cost' :'$350 mxn',
    'description':'Bandeja con varios compartimientos,100% madera, medidas 30 cm x 20 cm'
});
addItem({
    'id' : '8',
    'name':'Base para cuchillos',
    'img':'http://drive.google.com/uc?export=view&id=1DKn4Q-CbJ2CV0Csu8L2qpaQxTcwJoXx2',
    'category' : 'Cocina',
    'cost' :'$250 mxn',
    'description':'Base con varios compartimientos, medidas 20 cm x 15 cm'
});
addItem({
    'id' : '9',
    'name':'Porta vasos en forma de rompezabezas',
    'img':'http://drive.google.com/uc?export=view&id=1CliBjKmk-4CX2NuiRlD3zMqMBUY3T-Xa',
    'category' : 'Cocina',
    'cost' :'$200 mxn',
    'description':'Juego de 4 piezas, medidas 10 cm x 10 cm'
});
addItem({
    'id' : '10',
    'name':'Tabla para picar alimentos',
    'img':'http://drive.google.com/uc?export=view&id=1A5Ff2TJLhYytAc7SlGdl1TUDbNN2jJfG',
    'category' : 'Cocina',
    'cost' :'$190 mxn',
    'description':'Diseño rectangular, 100% madera, medidas 30 cm x 35 cm'
});
addItem({
    'id' : '11',
    'name':'Tabla para picar alimentos',
    'img':'http://drive.google.com/uc?export=view&id=19qk_jxSjGv11P78-Ywm4c18H9wmfxPtl',
    'category' : 'Cocina',
    'cost' :'$190 mxn',
    'description':'Diseño circular, 100% madera, medidas 30 cm diametro'
})
addItem({
    'id' : '12',
    'name':'Frutero',
    'img':'http://drive.google.com/uc?export=view&id=1CyJtI2UZpuX1wzVen_ntCA4Pa_Tm5k7w',
    'category' : 'Cocina',
    'cost' :'$250 mxn',
    'description':'Diseño circular, medidas 30 cm x 30 cm'
});

// Muestra el modal de acuerdo al producto seleccionado
let agregar = document.getElementsByClassName("btnAgregar");
console.log(agregar);

for (let i = 0; i < agregar.length; i++) {
    agregar[i].addEventListener("click", (event) => {
        let id = i + 1;
        // Borrar datos
        let newName = document.getElementById("nombreProducto").innerHTML = "";
        let newDescription = document.getElementById("descripcionProducto").innerHTML =  "";
        // Agregar datos
        lnewName = document.getElementById("nombreProducto").innerHTML =  document.getElementById("nameProduct" + id).innerHTML;
        newDescription = document.getElementById("descripcionProducto").innerHTML =  document.getElementById("descriptionProduct" + id).innerHTML;
        console.log(id);
    });
} // for