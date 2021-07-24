<?php

namespace App\Http\Controllers;
use App\Models\Consola;
use Illuminate\Http\Request;


//Aqui va  la logica vinculada a las consolas
class ConsolasController extends Controller
{
    public function getMarcas(){
        $marcas = array();
        $marcas[] = "Sony";
        $marcas[] = "Microsoft";
        $marcas[] = "Nintendo";
        $marcas[] = "Sega";

        return $marcas;
    }

    // Esta funcion va a ir a buscar todas las cosolas que existen en la base de datos y las va a retornar
    public function getConsolas(){ 
        //Equivalente a un select * from consolas
        $consolas = Consola::all();
        return $consolas;
    }

    // Esta funcion va a registrar una consola de ejemplo en la bd
    // Una request es un objeto  php que permite acceder a las cosas que me mandaron desde la interfaz
    // Cuando el metodo recibe cosas el request va en los parantesis
    public function crearConsola(Request $request){ 
        //Equivalente a un insert
        $input = $request->all(); //Genera un arreglo con todo lo que mando la intefaz (javascript)
        $consola = new Consola();
        $consola->nombre = $input["nombre"];
        $consola->marca = $input["marca"];
        $consola->anio = $input["anio"];

        $consola->save();
        return $consola;
    }
}
