<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product\warehouse_table;

class WarehouseController extends Controller
{
    public function addWarehouse(Request $req)
    {
        $warehouse = new warehouse_table;
        $warehouse->warehouse_id = $req->warehouse_id;
        $warehouse->name = $req->name;
        $warehouse->description = $req->description;
        $warehouse->address = $req->address;
        $warehouse->zip_code = $req->zip_code;
        $warehouse->city = $req->city;
        $warehouse->country = $req->country;
        $warehouse->phone = $req->phone;
        $warehouse->quantity = $req->quantity;
        $warehouse->remaining_quantity = $req->quantity;
        $warehouse->status = $req->status;
        $warehouse->date_added = date('Y-m-d');
        $warehouse->last_updated = date('Y-m-d');
        $result = $warehouse->save();

        if($result)
        {
            return response()->json($result);
        }
        else
        {
            return response('Failed to add warehouse!', 400)
                  ->header('Content-Type', 'text/plain');
        } 
    }

    public function getWarehouses()
    {
        $allWarehouses = warehouse_table::all();
        return response()->json($allWarehouses);
    }
}
