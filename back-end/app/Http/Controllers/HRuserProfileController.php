<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class HRuserProfileController extends Controller
{
    public function details($username)
    {
        
        $user=User::where('username', $username)->first();
        return response()->json($user);
        
    }
    public function profileUpdate(Request $req,$username)
    {
        
        $user = User::where('username', $username)->first();
        $user->firstname = $req->firstname;
        $user->lastname = $req->lastname;
        $user->phone = $req->phone;
        $user->email = $req->email;
        $user->address = $req->address;
        $user->save();
        return response('Profile Updated', 200)
                  ->header('Content-Type', 'text/plain'); 

    }
    public function PasswordUpdate(Request $req,$username)
    {
        $old_pass=$req->old_password;
        $user = User::where('username', $username)->first();
        $curr_pass=$user->pass;
        if($old_pass==$curr_pass)
        {
            $user->pass=$req->new_password;
            $user->save();
            return response('Password Updated', 200)
                  ->header('Content-Type', 'text/plain'); 
        }
        else
        {
            return response('Not Found', 404)
                  ->header('Content-Type', 'text/plain');
        }
    }
}
