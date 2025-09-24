<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Book\BookInterface;
use Illuminate\Http\Request;

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
    public function store(Request $request)
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
    public function update(Request $request, $id)
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
