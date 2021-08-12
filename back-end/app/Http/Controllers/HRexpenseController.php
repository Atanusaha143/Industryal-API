<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Expense;

class HRexpenseController extends Controller
{
    public function create(Request $req)
    {
        $expense=new Expense;
        $expense->name=$req->name;
        $expense->catagory=$req->catagory;
        $expense->amount=$req->amount;
        $expense->description=$req->description;
        $expense->expense_date=$req->expense_date;
        
        $expense->save();
        return response('Expense Report Created', 200)
                  ->header('Content-Type', 'text/plain'); 
        
    }
    public function getExpenseList()
    {
        $expenses = Expense::get();
        if(count($expenses)>0){
            return response()->json($expenses);
        }
        return response('Not Found', 404)
                  ->header('Content-Type', 'text/plain');
    }
}
