<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class HRuserController extends Controller
{
    public function addUser(Request $req)
    {
        //$img = $req->file('profile_image');

        $user=new User;
        $user->firstname=$req->firstname;
        $user->lastname=$req->lastname;
        $user->username=$req->username;
        $user->email=$req->email;
        $user->phone=$req->phone;
        $user->address=$req->address;
        $user->gender=$req->gender;
        $user->position=$req->position;
        $user->type=$req->type;
        $user->pass=$req->pass;
        $user->work_hour=$req->work_hour;
        //$user->organization_id=$req->organization_id;
        //$user->profile_pic = $req->user_name.'.'.$img->getClientOriginalExtension();
        //$img->move('upload/Users', $req->user_name.'.'.$img->getClientOriginalExtension());

       
        $result=$user->save();
        /* return response('User Added', 200)
                  ->header('Content-Type', 'text/plain'); */
                  if($result)
                  {
                      return ["Result"=>"Data has been saved"];
                  }
                  else
                  {
                      return ["Result"=>"Failed to save data"];
                  }             
    }
    public function getUserList()
    {
        $users = User::get();
        if(count($users)>0){
            return response()->json($users);
        }
        return response('Employees Not Found', 404)
                  ->header('Content-Type', 'text/plain');
    }
    
}
