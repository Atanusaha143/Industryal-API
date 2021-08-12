<?php

namespace App\Http\Controllers;

use App\Models\SalesCustomers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SalesCustomersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SalesCustomers::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'email'=>'required',
            'phone'=>'required',
            'delivery_point'=>'required',
            'first_purchase'=>'required',
            'type'=>'required',
        ]);
        
        return SalesCustomers::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SalesCustomers  $salesCustomers
     * @return \Illuminate\Http\Response
     */
    public function show(string $id)
    {
        // return gettype($id);
        return SalesCustomers::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SalesCustomers  $salesCustomers
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, string $id)
    {
        $customer = SalesCustomers::find($id);
        $customer->update([
            $customer->name = $request->name,
            $customer->email = $request->email,
            $customer->phone = $request->phone,
            $customer->delivery_point = $request->delivery_point,
            $customer->type = $request->type,
            $customer->updated_at = date("Y-m-d H:i:s"),
        ]);
        return $customer;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SalesCustomers  $salesCustomers
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $id)
    {
        return SalesCustomers::destroy($id);
    }
}
