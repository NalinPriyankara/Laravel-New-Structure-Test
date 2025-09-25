<?php

namespace App\Providers;

use App\Repositories\All\Author\AuthorInterface;
use App\Repositories\All\Author\AuthorRepository;
use App\Repositories\All\Book\BookInterface;
use App\Repositories\All\Book\BookRepository;
use App\Repositories\All\Review\ReviewInterface;
use App\Repositories\All\Review\ReviewRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(AuthorInterface::class, AuthorRepository::class);
        $this->app->bind(BookInterface::class, BookRepository::class);
        $this->app->bind(ReviewInterface::class, ReviewRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
