<?php
namespace App\Repositories\Book;

use App\Models\Book;
use App\Repositories\Book\BookInterface;

class BookRepository implements BookInterface
{
    public function all()
    {
        return Book::with('author')->get(); // eager load author
    }

    public function find($id)
    {
        return Book::with('author')->findOrFail($id);
    }

    public function create(array $data)
    {
        return Book::create($data);
    }

    public function update($id, array $data)
    {
        $book = Book::findOrFail($id);
        $book->update($data);
        return $book;
    }

    public function delete($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return true;
    }
}