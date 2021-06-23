### 1. COMANDOS USO COMUN

## 1.1 Para git
´´git
    git add -A
    git commit -m "Nombre"
    git push origin
´´

## 1.2 Para deplegar con docker
´´bash
    docker-compose build
    docker-compose up -d
´´
## 1.3 Para crear desde cero un proyecto
´´bash
    composer create-project laravel/laravel nombreAPP
´´

## 1.4 Para instalar (recien se descarga de github, cuando el proyecto ya existe):
´´bash
    composer install
´´
### 2. LARAVEL

## 2.1 Para crear controladores (dentro del contenedor):         
´´bash
    php artisan make:controller NombreController
´´
### 3. BASE DE DATOS

## 3.1 Para actualizar base de datos (attash shell)
´´bash
    php artisan migrate
´´

## 3.2 Para crear una migracion
´´
    php artisan make:migration nombre --create==nombre_tabla_en_plural
´´

## 3.3 Para crear un modelo (archivo que permite efectuar operaciones con la base de datos)
´´
    php artisan make:model Nombre                 (Nombre siempre en singular)
´´

## INFORMACION

    -En los contenedores se coloca la logica de la aplicacion (acceso a base de datos, etc...)

    -Las vistas (views, deben estar en esa carpeta) son elementos estaticos para no tener que copiar y pegar codigo, pueden tener url (para que no se vea "feo") que venga de un php (rutas/routes) o de un controlador

    -Hay recursos estaticos (archivos js, archivos css, imagenes) que son archivos cargados dinamicamente desde la web y deben estar en la carpeta public, todo lo cargado de public debe ser con src="{{asset('ubicacion')}}"