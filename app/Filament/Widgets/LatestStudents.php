<?php

namespace App\Filament\Widgets;

use App\Models\Student;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestStudents extends BaseWidget
{
    protected  array|string|int $columnSpan = 'full';

    protected static ?int $sort = 2;

    public function table(Table $table): Table
    {



        return $table
            ->query(
                Student::query()->latest()->limit(5)

            )
            ->columns([
                TextColumn::make('name')->sortable()->searchable(),
                TextColumn::make('email')->sortable()->searchable(),
                TextColumn::make('section.name')->badge(),
                TextColumn::make('classes.name')->badge(),
            ]);
    }
}
