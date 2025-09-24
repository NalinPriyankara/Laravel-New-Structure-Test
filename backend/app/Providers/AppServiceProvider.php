<?php

namespace App\Providers;

use App\Repositories\Author\AuthorInterface;
use App\Repositories\Author\AuthorRepository;
use App\Repositories\Book\BookInterface;
use App\Repositories\Book\BookRepository;
use App\Repositories\Review\ReviewInterface;
use App\Repositories\Review\ReviewRepository;
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
