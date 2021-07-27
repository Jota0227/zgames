const cargarMarcas = async ()=>{
    //ir a buscar el filtro-cbx
    let filtroCbx = document.querySelector("#filtro-cbx");
    //ir a buscar las marcas
    let marcas = await getMarcas();
    marcas.forEach(m=>{                                         //Dentro de este for se asigna una opcion al filtro por cada marca
        let option = document.createElement("option");
        option.innerText = m;
        option.value = m;
        filtroCbx.appendChild(option);   
    });
};

const iniciarEliminacion = async function(){
    //Obtener el id a eliminar
    let id = this.idConsola; //this. da el boton donde se llamo la funcion y de ahi se obtine el id
    let resp = await Swal.fire({tittle:"Esta seguro?", text:"Esta operacion es irreversible", icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        //Eliminar
        if(await eliminarConsola(id)){
            //Si la eliminacion fue exitosa, recargar la tabla
            let consolas = await getConsolas();
            cargarTabla(consolas);
            Swal.fire("Consola eliminda","Consola eliminada exitosamente","info");
        }else{
            //Si no funciona, mostrar un mensaje de error
            Swal.fire("Error","No se pudo atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado","cancelado por el usuario", "info");
    }
};

const cargarTabla = (consolas)=>{
    //obtener referencia al cuerpo de la tabla
    let tbody = document.querySelector("#tbody-consola");
    tbody.innerHTML = "";
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
        botonEliminar.addEventListener("click", iniciarEliminacion);
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

document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{      // el click se ejecuta siempre que se haga click independiente si hace cambio o no, con change solo ejecuta cuando cambia el valor
    let filtro = document.querySelector("#filtro-cbx").value;
    let consolas = await getConsolas(filtro);
    cargarTabla(consolas);
});

document.addEventListener("DOMContentLoaded", async ()=>{
    //Aqui se carga la tabla de consolas, porque si al entrar aqui se asegura que se esta ejecutando cuando la pagina este completamente cargada
    await cargarMarcas();
    let consolas = await getConsolas();
    cargarTabla(consolas);
});