<?php
namespace App\Repositories\Author;

use App\Models\Author;

class AuthorRepository implements AuthorInterface
{
    public function all()
    {
        return Author::all();
    }


    public function paginate(int $perPage = 5)
    {
        return Author::paginate($perPage);
    }


    public function find(int $id): ?Author
    {
        return Author::find($id);
    }


    public function create(array $data): Author
    {
        return Author::create($data);
    }


    public function update(int $id, array $data): bool
    {
        $author = $this->find($id);
        if (! $author) return false;
        return $author->update($data);
    }


    public function delete(int $id): bool
    {
        $author = $this->find($id);
        if (! $author) return false;
        return $author->delete();
    }
}