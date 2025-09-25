<?php

namespace App\Repositories\All\Author;

use App\Models\Author;
use App\Repositories\Base\BaseRepository;

class AuthorRepository extends BaseRepository implements AuthorInterface
{
    public function __construct(Author $model)
    {
        parent::__construct($model);
    }

    // Add Author-specific methods if needed
}
