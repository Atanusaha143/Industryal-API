<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class HRemployeeController extends Controller
{
    public function addEmployee(Request $req)
    {

        $employee=new Employee;
        $employee->employee_id=$req->employee_id;
        $employee->employee_name=$req->employee_name;
        $employee->gender=$req->gender;
        $employee->supervisor=$req->supervisor;
        $employee->present_address=$req->present_address;
        $employee->phone=$req->phone;
        $employee->job_position=$req->job_position;
        $employee->employee_group="N/A";
        $employee->start_time=$req->start_time;
        $employee->end_time=$req->end_time;
        $employee->hour_worked=$req->hour_worked;
        $employee->employment_start_date=$req->employment_start_date;
        
        $employee->save();
        return response('Employee Added', 200)
                  ->header('Content-Type', 'text/plain'); 
    }
    public function getEmployeeList()
    {
        $employees = Employee::get();
        if(count($employees)>0){
            return response()->json($employees);
        }
        return response('Employees Not Found', 404)
                  ->header('Content-Type', 'text/plain');
    }
}
