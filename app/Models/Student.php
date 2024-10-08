<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    public $guarded = ['id'];

    public function classes()
    {
        return $this->belongsTo(Classes::class);
    }

    public function section()
    {
        return $this->belongsTo(Section::class);
    }
}
