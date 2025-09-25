<?php
namespace App\Repositories\All\Author;

use App\Models\Author;

interface AuthorInterface
{
    public function all();
    public function paginate(int $perPage = 15);
    public function find(int $id): ?Author;
    public function create(array $data): Author;
    public function update(int $id, array $data): bool;
    public function delete(int $id): bool;

}