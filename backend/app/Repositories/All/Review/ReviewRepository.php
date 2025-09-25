<?php

namespace App\Repositories\All\Review;

use App\Models\Review;
use App\Repositories\Base\BaseRepository;
use App\Repositories\All\Review\ReviewInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;

class ReviewRepository extends BaseRepository implements ReviewInterface
{
    public function __construct(Review $model)
    {
        parent::__construct($model);
    }

    public function all(): Collection
    {
        return $this->model->with('book')->get();
    }

    public function find(int $id): ?Model
    {
        return $this->model->with('book')->find($id);
    }
}
