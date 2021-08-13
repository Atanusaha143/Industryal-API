<?php

use App\Http\Controllers\SalesCustomersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/sales/customers', [SalesCustomersController::class, 'index']);
Route::post('/sales/customers', [SalesCustomersController::class, 'store']);
Route::get('/sales/customers/{id}', [SalesCustomersController::class, 'show']);
Route::put('/sales/customers/{id}', [SalesCustomersController::class, 'update']);
Route::delete('/sales/customers/{id}', [SalesCustomersController::class, 'destroy']);
Route::get('/sales/customers/search/{name}', [SalesCustomersController::class, 'search']);