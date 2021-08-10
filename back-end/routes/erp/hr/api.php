<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HRuserController;

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

Route::Post('/HR/user/create',[HRuserController::class,'addUser']);
Route::get('/HR/user/list',[HRuserController::class,'getUserList']);
Route::delete('/HR/user/delete/{id}',[HRuserController::class,'deleteUser']);
Route::put("/HR/user/update/{id}",[HRuserController::class,'updateUser']);
Route::get("/HR/user/{id}",[HRuserController::class,'getUserById']);
