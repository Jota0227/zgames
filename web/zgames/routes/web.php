<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//  return view('registrar_juego');
//});
Route::view("/","registrar_consola")->name("registrar_consola");
//Route::get("/registrar_juego",function(){
//    return view("registrar_juego");
//});
Route::view("/registrar_juego","registrar_juego")->name("registrar_juego");


Route::view("/ver_consolas","ver_consolas")->name("ver_consolas");
//Route::get("/ver_consolas",function(){
//    return view("ver_consolas");
//});
Route::view("/ver_juegos","ver_juegos")->name("ver_juegos");
//Route::get("/ver_juegos",function(){
//    return view("ver_juegos");
//});