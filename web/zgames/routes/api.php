<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ConsolasController; //Para usar controlador se importa con namespace\NombreClase


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Routte::get("url", [controlador::class, "metodo"]);    Puede ser post para enviar cosas o get para obtener cosas de la bd
Route::get("marcas/get", [ConsolasController::class, "getMarcas"]);

Route::get("consolas/get", [ConsolasController::class, "getConsolas"]);

Route::get("consolas/filtrar", [ConsolasController::class, "filtrarConsolas"]);

Route::post("consolas/post", [ConsolasController::class,"crearConsola"]);

//POR CADA ENTIDAD GENERADA SE TENDRA QUE GENERAR UN MODELO, UN CONTROLADOR Y UN SERVICIO

Route::post("consolas/delete",[ConsolasController::class,"eliminarConsola"]);