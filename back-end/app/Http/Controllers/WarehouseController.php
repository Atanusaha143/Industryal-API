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
        $warehouse->name = $req->warehouse_name;
        $warehouse->description = $req->warehouse_description;
        $warehouse->address = $req->warehouse_address;
        $warehouse->zip_code = $req->warehouse_zip_code;
        $warehouse->city = $req->warehouse_city;
        $warehouse->country = $req->warehouse_country;
        $warehouse->phone = $req->warehouse_phone;
        $warehouse->status = $req->warehouse_status;
        $warehouse->quantity = $req->warehouse_quantity;
        $warehouse->remaining_quantity = $req->warehouse_quantity;
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
}
