<?php

namespace App\Filament\Resources;

use App\Exports\StudentsExport;
use App\Filament\Resources\StudentResource\Pages;
use App\Filament\Resources\StudentResource\RelationManagers;
use App\Models\Classes;
use App\Models\Section;
use App\Models\Student;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Actions\BulkAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Maatwebsite\Excel\Facades\Excel;

class StudentResource extends Resource
{
    protected static ?string $model = Student::class;

    protected static ?string $navigationIcon = 'heroicon-o-academic-cap';
    protected static ?string $navigationGroup = 'Academics Group';

    public static function getNavigationBadge(): ?string
    {
        return static::$model::count();
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')->required()->autofocus(),
                TextInput::make('email')->required()->unique(),




                Select::make('classes_id')
                    ->relationship(name: 'classes', titleAttribute: 'name')
                    ->label('Class')
                    ->live(),




                Select::make('section_id')
                    ->label('Section')
                    ->options(function (Get $get) {
                        $classes_id = $get('classes_id');
                        if ($classes_id) {
                            return Section::where('classes_id', $classes_id)->pluck('name', 'id')->toArray();
                        }
                    }),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->sortable()->searchable(),
                TextColumn::make('email')->sortable()->searchable(),
                TextColumn::make('section.name')->badge(),
                TextColumn::make('classes.name')->badge(),
            ])
            ->filters([
                Filter::make('filter-by-class')
                    ->form([
                        Select::make('classes_id')
                            ->label('Filter by class')
                            ->placeholder('Select a class')
                            ->options(Classes::pluck('name', 'id')->toArray()),
                        Select::make('section_id')
                            ->label('Filter by section')
                            ->placeholder('Select a section')
                            ->options(function (Get $get) {
                                $classes_id = $get('classes_id');
                                if ($classes_id) {
                                    return Section::where('classes_id', $classes_id)->pluck('name', 'id')->toArray();
                                }
                            })
                    ])
                    ->query(function (Builder $query, array $data) {
                        return $query->when($data['classes_id'], function ($query) use ($data) {
                            return $query->where('classes_id', $data['classes_id']);
                        })->when($data['section_id'], function ($query) use ($data) {
                            return $query->where('section_id', $data['section_id']);
                        });
                    })
            ])
            ->filtersTriggerAction(
                fn(Action $action) => $action
                    ->button()
                    ->label('Filter'),
            )
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Action::make('download.invoice')
                    ->url(fn(Student $record): string => route('students.invoice.pdf', $record))
                    ->openUrlInNewTab()
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    BulkAction::make('export')
                        ->requiresConfirmation()
                        ->label('Export Records')
                        ->icon('heroicon-o-document-arrow-down')
                        ->action(function (Collection $records) {
                            return Excel::download(new StudentsExport($records), 'students.xlsx');
                        })
                ]),

            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListStudents::route('/'),
            'create' => Pages\CreateStudent::route('/create'),
            'edit' => Pages\EditStudent::route('/{record}/edit'),
        ];
    }
}
