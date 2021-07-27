//PERTENECE A registrar_consola.blade, LA IDEA ES QUE TENGAN EL MISMO NOMBRE QUE EL BLADE PARA IDENTIFICARLO

const cargarMarcas = async()=>{
    //1. Ir a buscar las marcas a la api
    let marcas = await getMarcas();
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
    let nombre=document.querySelector("#nombre-txt").value.trim(); //trim elimina los espacios de izquierda y derecha
    let marca=document.querySelector("#marca-select").value.trim();
    let anio=document.querySelector("#anio-txt").value.trim();
    let errores =[];
    if(nombre ===""){  //el triple igual compara igualdad absoluta (JAVA)
        errores.push("Debe ingresar un nombre");
    }else{
        //Validar si la consola existe en el sistema
        let consolas = await getConsolas(); 
        //se pasa todo a minusculas en caso de que se ingrese por ejemplo Xbox y XBOX sigan siendo lo mismo
        let consolaEncontrada = consolas.find(c=>c.nombre.toLowerCase()===nombre.toLowerCase()); //find lo que hace es recorrer todo el arreglo, si encuentra lo buscado devuelve el valor inmediatamente, si no devuelve undefined
        if(consolaEncontrada != undefined){
            errores.push("La consola ya existe");
        }
    }
    if(isNaN(anio)){  //isNaN viene de NaN que es not a number y si colocas isNaN devuelve si el valor indicado es o no un numero
        errores.push("El año debe ser numerico");
    }else if(+anio <1958){                             //anio viene de un componente de tipo texto, y para transformar el input de texto en un numero (ES IMPORTANTE QUE ESTE DSP DE UNA COMPARACION NaN)
        errores.push("El año es incorrecto")
    }
    if(errores.length ==0){ //ESTO QUIERE DECIR QUE NO HUBIERON ERRORES
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
    }else{
        //Mostrar errores
        Swal.fire({
            tittle: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")  //Esto es una opcion que hace que transforma el arreglo de errores en un texto (["a","b","c"] lo transforma a "a <br /> b <br /> c" (<br /> es un salto de linea en html))
        });
    }
});