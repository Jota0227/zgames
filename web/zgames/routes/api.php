<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ConsolasController; //Para usar controlador se importa con namespace\NombreClase
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Routte::get("url", [controlador::class, "metodo"]);    Puede ser post para enviar cosas o get para obtener cosas de la bd
Route::get("marcas/get", [ConsolasController::class, "getMarcas"]);

Route::get("consolas/get", [ConsolasController::class, "getConsolas"]);

Route::get("consolas/post", [ConsolasController::class,"crearConsola"]);