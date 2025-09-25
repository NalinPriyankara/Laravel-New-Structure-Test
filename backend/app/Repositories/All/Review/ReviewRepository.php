<?php

namespace App\Repositories\All\Review;

use App\Models\Review;
use App\Repositories\All\Review\ReviewInterface;

class ReviewRepository implements ReviewInterface
{
    public function all()
    {
        return Review::with('book')->get(); // eager load book
    }

    public function find($id)
    {
        return Review::with('book')->findOrFail($id);
    }

    public function create(array $data)
    {
        return Review::create($data);
    }

    public function update($id, array $data)
    {
        $review = Review::findOrFail($id);
        $review->update($data);
        return $review;
    }

    public function delete($id)
    {
        $review = Review::findOrFail($id);
        $review->delete();
        return true;
    }
}