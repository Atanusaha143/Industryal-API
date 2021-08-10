<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Models\Product\product_table;

class ProductController extends Controller
{
    public function addProduct(Request $req)
    {
        $img = $req->file('product_image');

        $product = new product_table;

        $product->product_id = $req->product_id;
        $product->product_name = $req->product_name;
        $product->status_sell = $req->status_sell;
        $product->status_purchase = $req->status_purchase;
        $product->product_description = $req->product_description;
        $product->warehouse_name = $req->warehouse_name;
        $product->stock = $req->stock;
        $product->nature = $req->nature;
        $product->weight = $req->weight;
        $product->weight_unit = $req->weight_unit;
        $product->dimention = $req->dimention;
        $product->dimention_unit = $req->dimention_unit;
        $product->selling_price = $req->selling_price;
        $product->tax = $req->tax;
        $product->image = $req->product_id.'.'.$img->getClientOriginalExtension();
        $product->product_condition = "Good";
        $product->date_added = date('Y-m-d');
        $product->last_updated = date('Y-m-d');
        $result = $product->save();
        $img->move('upload/Product', $req->product_id.'.'.$img->getClientOriginalExtension());


        if($result)
        {
            return response()->json($result);
        }
        else
        {
            return response('Failed to add product!', 400)
                  ->header('Content-Type', 'text/plain');
        } 
        
    }

    public function getProducts()
    {
        $allProducts = product_table::all();
        return response()->json($allProducts);
    }

    public function deleteProduct($id)
    {
        $deletedProduct = product_table::find($id);
        $img_path = "upload/Product/".$deletedProduct['image'];
        if(File::exists($img_path)) 
        {
            File::delete($img_path);
        }
        $result = $deletedProduct->delete();

        if($result)
        {
            return response()->json($result);
        }
        else
        {
            return response('Failed to delete product!', 404)
                  ->header('Content-Type', 'text/plain');
        } 
    }

    function getProductById($id)
    {
        $result = product_table::find($id);
        if($result)
        {
            return response()->json($result);
        }
        else
        {
            return response('Product not found!', 204)
                  ->header('Content-Type', 'text/plain');
        }
    }

    public function updateProduct(Request $req, $id)
    {
        $product = product_table::find($id);
        $product->product_id = $req->product_id;
        $product->product_name = $req->product_name;
        $product->status_sell = $req->status_sell;
        $product->status_purchase = $req->status_purchase;
        $product->product_description = $req->product_description;
        $product->warehouse_name = $req->warehouse_name;
        $product->stock = $req->stock;
        $product->nature = $req->nature;
        $product->weight = $req->weight;
        $product->weight_unit = $req->weight_unit;
        $product->dimention = $req->dimention;
        $product->dimention_unit = $req->dimention_unit;
        $product->selling_price = $req->selling_price;
        $product->tax = $req->tax;
        $product->product_condition = $req->product_condition;
        $product->last_updated = date('Y-m-d');
        $result = $product->save();
        return $product;
 
         if($result)
         {
             return response()->json($result);
         }
         else
         {
             return response('Failed to update product!', 400)
                   ->header('Content-Type', 'text/plain');
         } 
    }
}
