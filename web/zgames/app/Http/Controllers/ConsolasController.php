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
    public function crearConsola(){
        $consola = new Consola();
        $consola->nombre = "Nintendo Switch";
        $consola->marca = "Nintendo";
        $consola->anio = "2015";

        $consola->save();
        return $consola;
    }
}
