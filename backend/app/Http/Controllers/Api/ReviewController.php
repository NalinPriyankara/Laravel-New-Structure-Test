<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReviewRequest;
use App\Repositories\All\Review\ReviewInterface;

class ReviewController extends Controller
{
    protected $reviews;

    public function __construct(ReviewInterface $reviews)
    {
        $this->reviews = $reviews;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json($this->reviews->all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ReviewRequest $request)
    {
        $review = $this->reviews->create($request->all());
        return response()->json($review, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return response()->json($this->reviews->find($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ReviewRequest $request, $id)
    {
        $review = $this->reviews->update($id, $request->all());
        return response()->json($review);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $deleted = $this->reviews->delete($id);
        if (! $deleted) return response()->json(['message' => 'Not found'], 404);
        return response()->json(['message' => 'Deleted']);
    }
}
