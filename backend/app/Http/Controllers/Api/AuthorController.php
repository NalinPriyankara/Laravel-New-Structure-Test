<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthorRequest;
use App\Repositories\All\Author\AuthorInterface;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    protected $authors;

    public function __construct(AuthorInterface $authors)
    {
        $this->authors = $authors;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->get('per_page', 5);
        $data = $this->authors->paginate($perPage);
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AuthorRequest $request)
    {
        $author = $this->authors->create($request->validated());
        return response()->json($author, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $author = $this->authors->find($id);
        if (! $author) return response()->json(['message' => 'Not found'], 404);
        return response()->json($author);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AuthorRequest $request, $id)
    {
        $updated = $this->authors->update($id, $request->validated());
        if (! $updated) return response()->json(['message' => 'Not found'], 404);
        return response()->json(['message' => 'Updated']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $deleted = $this->authors->delete($id);
        if (! $deleted) return response()->json(['message' => 'Not found'], 404);
        return response()->json(['message' => 'Deleted']);
    }
}
