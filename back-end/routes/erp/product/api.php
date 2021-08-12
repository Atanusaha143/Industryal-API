<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\OtherController;
use App\Http\Controllers\ProductManagerController;
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
Route::get("product/search/{name}",[ProductController::class,'getProductByName']);
Route::get("product/list/faulty",[ProductController::class,'getFaultyProducts']);
Route::get("product/search/faulty/{name}",[ProductController::class,'getFaultyProductByName']);
Route::get("product/dashboard/current-affairs",[ProductController::class,'getCurrentAffairs']);
Route::get("product/warehouse/names",[ProductController::class,'getWarehouseNames']);
Route::put("product/transfer",[ProductController::class,'transferProduct']);

                                    //Warehouse
Route::post("warehouse/create",[WarehouseController::class,'addWarehouse']);
Route::get("warehouse/list",[WarehouseController::class,'getWarehouses']);
Route::get("warehouse/search/{name}",[WarehouseController::class,'getWarehouseByName']);
Route::delete("warehouse/delete/{id}",[WarehouseController::class,'deleteWarehouse']);
Route::get("warehouse/{id}",[WarehouseController::class,'getWarehouseById']);
Route::put("warehouse/edit/{id}",[WarehouseController::class,'updateWarehouse']);
Route::get("/warehouse/list/names",[WarehouseController::class,'getWarehouseNames']);

                                    //Other
Route::post("/product/user/leave/create",[OtherController::class,'createLeaveRequest']);
Route::get("/product/user/leave/myrequest",[OtherController::class,'getMyLeaveRequests']);
Route::get("/product/user/leave/myrequest/search/{name}",[OtherController::class,'getRequestByName']);
Route::get("/product/user/activities",[OtherController::class,'getActivities']);
Route::get("/product/user/activities/search/{type}",[OtherController::class,'getActivitiesByType']);
Route::post("/product/user/administration/create",[OtherController::class,'createAdministrationIssue']);
Route::get("/product/user/administration/myissue",[OtherController::class,'getMyIssues']);
Route::get("/product/user/administration/myissue/search/{name}",[OtherController::class,'getIssueByName']);


                                    //User
Route::get("product/user/profile/{username}",[ProductManagerController::class,'getUserInfo']);