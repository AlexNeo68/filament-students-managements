<?php

use App\Http\Controllers\InvoicesController;
use App\Models\Post;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $posts = Post::all();

    return view('welcome', compact('posts'));
});


Route::get('/{student}/invoices/pdf', [InvoicesController::class, 'downloadPdf'])->name('students.invoice.pdf');
