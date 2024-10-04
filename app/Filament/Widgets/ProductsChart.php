<?php

namespace App\Filament\Widgets;

use App\Models\Product;
use Carbon\Carbon;
use Filament\Widgets\ChartWidget;

class ProductsChart extends ChartWidget
{
    protected static ?string $heading = 'ChartProducts';
    protected static ?int $sort = 3;

    protected function getData(): array
    {

        $data = $this->getProductsPerMonths();

        return [
            'datasets' => [
                [
                    'label' => 'Products created',
                    'data' => $data['productPerMonths'],
                ],
            ],
            'labels' => $data['months'],
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }

    private function getProductsPerMonths(): array
    {
        $now = Carbon::now();

        $productPerMonths = [];

        $months = collect(range(1, 12))->map(function ($month) use ($now, &$productPerMonths) {
            $count = Product::whereMonth('created_at', Carbon::parse($now->month($month)->format('Y-m')))->count();

            $productPerMonths[] = $count;
            return $now->month($month)->format('M');
        })->toArray();


        return [
            'productPerMonths' => $productPerMonths,
            'months' => $months,
        ];
    }
}
