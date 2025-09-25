<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookRequest;
use App\Repositories\All\Book\BookInterface;

class BookController extends Controller
{
    protected $books;

    public function __construct(BookInterface $books)
    {
        $this->books = $books;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json($this->books->all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BookRequest $request)
    {
        $book = $this->books->create($request->all());
        return response()->json($book, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json($this->books->find($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BookRequest $request, $id)
    {
        $book = $this->books->update($id, $request->all());
        return response()->json($book);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $this->books->delete($id);
        return response()->json(null, 204);
    }
}
