const cargarTabla = (consolas)=>{
    //obtener referencia al cuerpo de la tabla
    let tbody = document.querySelector("#tbody-consola");
    //recorrer todas las consolas   
    for(let i=0; i<consolas.length; ++i){
        //por cada consola generar una fila
        let tr = document.createElement("tr");
        //generar por cada atributo de la consola un td
        let tdNombre = document.createElement("td");
        tdNombre.innerText = consolas[i].nombre;
        let tdMarca = document.createElement("td");
        tdMarca.innerText = consolas[i].marca;
        let tdAnio = document.createElement("td");
        tdAnio.innerText = consolas[i].anio
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idConsola = consolas[i].id; //la idea de esto es asociar un boton a la id de una consola, asi al borrar
        tdAcciones.appendChild(botonEliminar);
        //agregar los td al tr
        tr.appendChild(tdNombre);
        tr.appendChild(tdMarca);
        tr.appendChild(tdAnio);
        tr.appendChild(tdAcciones);
        //agregar el tr al cuerpo de la tabla
        tbody.appendChild(tr);
    }
   
};

document.addEventListener("DOMContentLoaded", async ()=>{
    //Aqui se carga la tabla de consolas, porque si al entrar aqui se asegura que se esta ejecutando cuando la pagina este completamente cargada
    let consolas = await getConsolas();
    cargarTabla(consolas);
});