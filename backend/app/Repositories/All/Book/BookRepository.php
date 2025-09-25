<?php

namespace App\Repositories\All\Book;

use App\Models\Book;
use App\Repositories\Base\BaseRepository;
use App\Repositories\All\Book\BookInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class BookRepository extends BaseRepository implements BookInterface
{
    public function __construct(Book $model)
    {
        parent::__construct($model);
    }

    public function all(): Collection
    {
        return $this->model->with('author')->get();
    }

    public function find(int $id): ?Model
    {
        return $this->model->with('author')->find($id);
    }
}
