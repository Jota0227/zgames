<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaConsolas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   //Modelo orientado a objetos: base de datos relacional+programacion orientada a objetos (mysql+eloquen)(crea clases para que se cree sola la tabla)
        Schema::create('consolas', function (Blueprint $table) {
            $table->id();  //secuencias, autoincrementales (son claves unicas generadas automaticamente por el motor)
            $table->string("marca",50);
            $table->integer("anio");
            $table->timestamps();                                    // dos campos que agraga laravel create_at y el updated_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consolas');
    }
}
