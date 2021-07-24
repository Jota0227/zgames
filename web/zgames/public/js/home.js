//PERTENECE A registrar_consola.blade, LA IDEA ES QUE TENGAN EL MISMO NOMBRE QUE EL BLADE PARA IDENTIFICARLO

const cargarMarcas = async()=>{
    //1. Ir a buscar las marcas a la api
    let resultado = await axios.get("api/marcas/get");
    let marcas = resultado.data;
    //2. Cargar las marcas dentro del select
    let marcaSelect = document.querySelector("#marca-select");
    marcas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        marcaSelect.appendChild(option);
    })
}
// ESTO BASICAMENTE OPTIMIZA EL FUNCIONAMIENTO
document.addEventListener("DOMContentLoaded", ()=>{ //Esto ejecuta un codigo asegurandose que el total de la pagina incluidos los recursos esten cargados antes de ejecutar
    cargarMarcas();
});
document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let nombre=document.querySelector("#nombre-txt").value;
    let marca=document.querySelector("#marca-select").value;
    let anio=document.querySelector("#anio-txt").value;
    let consola = {};
    consola.nombre = nombre;
    consola.marca = marca;
    consola.anio = anio;
    //TO DO falta validar!!
    let res = await crearConsola(consola); // Esta pura linea va al controlador y le pasa los datos, el controlador crea el modelo, el modelo ingresa en la base de datos (res se puede reemplazar por cualquier nombre)
    //Mostrar un mensaje de exito con sweet alert
    await Swal.fire("Consola Creada", "Consola creada exitosamente", "info");
    //Con await implica que la linea que viene dsp de swal.fire se va a ejecutar solo cuando la persona aprete ok
    window.location.href = "ver_consolas";  //Con window se refiere a la ventana entera del navegador, location sirve para rescatar datos de la pagina (interna o externa) y con href se pueden ver o modificar los datos de la url de la pagina
    //Para entenderlo se puede leer como la ubicacion de la ventana actual

});