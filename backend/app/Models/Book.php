<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = ['author_id', 'title', 'isbn', 'published_at'];


    protected $dates = ['published_at'];


    public function author()
    {
        return $this->belongsTo(Author::class);
    }


    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
