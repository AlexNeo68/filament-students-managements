<?php

use App\Http\Controllers\InvoicesController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/{student}/invoices/pdf', [InvoicesController::class, 'downloadPdf'])->name('students.invoice.pdf');
