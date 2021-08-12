<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HRuserController;
use App\Http\Controllers\HRemployeeController;
use App\Http\Controllers\HRgroupController;
use App\Http\Controllers\HRempScheduleController;
use App\Http\Controllers\HRleaveController;
use App\Http\Controllers\HRexpenseController;

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
//User
Route::Post('/HR/user/create',[HRuserController::class,'addUser']);
Route::get('/HR/user/list',[HRuserController::class,'getUserList']);
Route::delete('/HR/user/delete/{id}',[HRuserController::class,'deleteUser']);
Route::put('/HR/user/update/{id}',[HRuserController::class,'updateUser']);
Route::get("/HR/user/{id}",[HRuserController::class,'getUserById']);

//Employee
Route::Post('/HR/employee/create',[HRemployeeController::class,'addEmployee']);
Route::get('/HR/employee/list',[HRemployeeController::class,'getEmployeeList']);
Route::put('/HR/employee/update/{employee_id}',[HRemployeeController::class,'updateEmployee']);
Route::delete('/HR/employee/delete/{employee_id}',[HRemployeeController::class,'deleteEmployee']);
Route::Post('/HR/employee/group',[HRgroupController::class,'createGroup']);
Route::get('/HR/employee/{employee_id}',[HRemployeeController::class,'getEmpByEmpId']);
Route::get('/HR/emp/schedule',[HRempScheduleController::class,'schedule']);
//Leave

Route::Post('/HR/leave/request',[HRleaveController::class,'verifyLeave']);
Route::get('/HR/leave/request/list',[HRleaveController::class,'getLeaveList']);
Route::put('/HR/leave/approve/{id}',[HRleaveController::class,'VerifyApprove']);
Route::put('/HR/leave/reject/{id}',[HRleaveController::class,'VerifyReject']);
Route::get("/HR/leave/{id}",[HRleaveController::class,'getLeaveById']);
//Expense
Route::post('/HR/expense/report',[HRexpenseController::class,'create']);
Route::get('/HR/expense/list',[HRexpenseController::class,'getExpenseList']);






