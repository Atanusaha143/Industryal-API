<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product\User;

class ProductManagerController extends Controller
{
    public function getUserInfo($username)
    {
        $info = User::where('username',$username)->get();
        if(count($info))
        {
            return response()->json($info);
        }
        else
        {
            return response('User not found!', 204)
                  ->header('Content-Type', 'text/plain');
        }
    }

    public function updateUserInfo(Request $req, $username)
    {
        $info = User::where('username',$username)->first();
        if($info->pass == $req->password)
        {
            $info->firstname = $req->firstName;
            $info->lastname = $req->lastName;
            $info->phone = $req->phoneNumber;
            $info->email = $req->email;
            $info->address = $req->address;
            $result = $info->save();
            if($result)
            {
                return response()->json($info);
            }
            else
            {
                return response('Failed to update profile!', 400)
                    ->header('Content-Type', 'text/plain');
            }
        }
        else
        {
            return "Incorrect current passowrd!";
        }
    }

    public function updateProfilePicture(Request $req, $username)
    {
        $img = $req->file('profile_pic');
        $info = User::where('username',$username)->first();
        if($info->pass == $req->pass)
        {
            $info->profile_pic = $username.'.'.$img->getClientOriginalExtension();
            $result = $info->save();
            $img->move('upload/Users', $username.'.'.$img->getClientOriginalExtension());
            if($result)
            {
                return response()->json($info);
            }
            else
            {
                return response('Failed to update profile picture!', 400)
                    ->header('Content-Type', 'text/plain');
            }
        }
        else
        {
            return "Incorrect current passowrd!";
        }
    }
}
