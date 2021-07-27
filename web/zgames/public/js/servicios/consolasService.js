//Este archivo va a tener las operaciones tipicas para comunicarse con el controlador (por cada funcion del controlador se crea una aca)
//IMPORTANTE ESTE ARCHIVO SE PUEDE USAR PARA OTROS PROYCTOS PORQUE LA ESTRUCTURA ES SIEMPRE LA MISMA, SOLO CAMBIAN LOS NOMBRES

//getConsolas
const getConsolas = async (filtro="todos")=>{
    let resp;
    if(filtro=="todos"){
        resp = await axios.get("api/consolas/get"); //esto traera la lista que esta en la base de datos, que por defecto sera todos, porque se indico arriba
    }else{
        resp = await axios.get(`api/consolas/filtrar?filtro=${filtro}`); // cuando no este en todo por defecto, llamara a api/consolas/filtrar y le va a pasar el filtro que se le pasa
    }
    return resp.data;
};

//creaConsolas

const crearConsola = async(consola)=>{  // el "=>" es una manera de crear una funcion (es lo mismo que poner function antes del parentesis)
    // Estructura de peticion post al servidor con axios
    let resp = await axios.post("api/consolas/post", consola, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return resp.data; //data es la propiedad de axios que trae los datos que manda php
};

const eliminarConsola = async(id)=>{
    try{                                                                                //Se tiene que hacer la comprobacion en java igual
        let resp = await axios.post("api/consolas/delete", {id}, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data=="ok";                                                        //Aqui se comprueba que la respuesta sea o no ok a que existan las tablas
    }catch(e){
        return false;
    }
}