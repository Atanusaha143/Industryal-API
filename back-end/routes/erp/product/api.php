<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
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


                                    //Product
Route::post("product/create",[ProductController::class,'addProduct']);
Route::get("product/list",[ProductController::class,'getProducts']);
Route::delete("product/delete/{id}",[ProductController::class,'deleteProduct']);
Route::get("product/{id}",[ProductController::class,'getProductById']);
Route::put("product/edit/{id}",[ProductController::class,'updateProduct']);