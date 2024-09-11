<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    use HasFactory;
    public $protected = ['id'];
    
    public function sections()
    {
        return $this->hasMany(Section::class);
    }
}
