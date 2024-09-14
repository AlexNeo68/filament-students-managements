<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Post extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $guarded = ['id'];

    public function preview(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->getFirstMediaUrl('preview'),
        );
    }


    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('preview')
            ->singleFile();

        $this
            ->addMediaCollection('detail')
            ->singleFile();

        $this->addMediaCollection('gallery');
    }


    protected $casts = [
        'is_published' => 'boolean'
    ];


}
