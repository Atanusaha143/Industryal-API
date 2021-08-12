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
}
