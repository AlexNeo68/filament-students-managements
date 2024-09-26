<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BrandResource\Pages;
use App\Filament\Resources\BrandResource\RelationManagers;
use App\Models\Brand;
use Filament\Forms;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ColorColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class BrandResource extends Resource
{
    protected static ?string $model = Brand::class;

    protected static ?string $navigationIcon = 'heroicon-o-cube-transparent';
    protected static ?string $navigationGroup = 'Shop';
    protected static ?string $navigationLabel = 'Бренды';

    protected static ?int $navigationSort = 1;


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Group::make()->schema([
                    Section::make()->schema([
                        TextInput::make('name')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->live(onBlur: true)
                            ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                                if ($operation !== 'create') {
                                    return;
                                }
                                $set('slug', Str::slug($state));
                            }),
                        TextInput::make('slug')
                            ->required()
                            ->disabled()
                            ->dehydrated()
                            ->unique(Brand::class, 'slug', ignoreRecord: true),
                        TextInput::make('url')
                            ->unique(Brand::class, 'url', ignoreRecord: true)
                            ->required()
                            ->columnSpan('full'),
                    ])->columns(2),
                ]),
                Group::make()->schema([
                    Section::make('Status')->schema([
                        Toggle::make('is_visible')
                            ->label('Visibility')
                            ->default(true)
                            ->helperText('Visible or hidden brand'),

                        ColorPicker::make('primary_hex')
                            ->required(),

                    ])
                ]),
                Group::make()->schema([
                    Section::make()->schema([
                        MarkdownEditor::make('description')->columnSpan('full'),
                    ])
                ])->columnSpan('full')
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->sortable()
                    ->searchable()
                    ->label('Наименование'),
                TextColumn::make('url')
                    ->sortable()
                    ->searchable()
                    ->label('Ссылка'),
                ColorColumn::make('primary_hex')
                    ->sortable()
                    ->label('Цвет'),

                IconColumn::make('is_visible')
                    ->boolean()
                    ->label('Видимость'),
                TextColumn::make('updated_at')
                    ->sortable()
                    ->date()
                    ->label('Обновлено')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListBrands::route('/'),
            'create' => Pages\CreateBrand::route('/create'),
            'edit' => Pages\EditBrand::route('/{record}/edit'),
        ];
    }
}
