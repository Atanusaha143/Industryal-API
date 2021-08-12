<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesCustomers extends Model
{
    protected $table = 'customers';
    protected $fillable = [
        'id',
        'name',
        'email',
        'phone',
        'delivery_point',
        'first_purchase',
        'type',
        'updated_at'
    ];
}
