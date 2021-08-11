<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product\leave_request;

class OtherController extends Controller
{
    public function createLeaveRequest(Request $req)
    {
        $leave = new leave_request;
        $leave->type = $req->type;
        $leave->request_description = $req->request_description;
        $leave->start_time = $req->start_time;
        $leave->end_time = $req->end_time;
        $leave->request_made = date("Y-m-d H:i:s");;
        $leave->status = "Pending";
        $leave->employee_id = 1;

        $result = $leave->save();
        
        if($result)
        {
            return response()->json($result);
        }
        else
        {
            return response('Failed to add request!', 400)
                  ->header('Content-Type', 'text/plain');
        } 
    }

    public function getMyLeaveRequests()
    {
        $allLeaveData = leave_request::all();
        return response()->json($allLeaveData);
    }
}
