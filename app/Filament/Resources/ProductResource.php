<?php

namespace App\Filament\Resources;

use App\Enums\ProductTypeEnum;
use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Filament\Resources\ProductResource\RelationManagers\BrandRelationManager;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Group;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-bars-4';

    protected static ?string $navigationGroup = 'Shop';
    protected static ?string $navigationLabel = 'Товары';

    protected static ?string $recordTitleAttribute = 'name';
    protected static int $globalSearchResultsLimit = 20;
    public static function getGloballySearchableAttributes(): array
    {
        return ['sku', 'slug', 'description'];
    }

    public static function getGlobalSearchResultDetails(Model $record): array
    {
        return [
            'Brand' => $record->brand->name,
        ];
    }

    public static function getGlobalSearchEloquentQuery(): Builder
    {
        return parent::getGlobalSearchEloquentQuery()->with(['brand']);
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getModel()::count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return static::getModel()::count() < 10 ? 'warning' : 'primary';
    }

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
                            ->afterStateUpdated(function (string $operation, $state, Set $set) {
                                // if ($operation !== 'create') return;
                                $set('slug', Str::slug($state));
                            }),
                        TextInput::make('slug')
                            ->disabled()
                            ->dehydrated()
                            ->required()
                            ->unique(Product::class, 'slug', ignoreRecord: true),
                        MarkdownEditor::make('description')->columnSpanFull(),
                    ])
                        ->columns(2),
                    Section::make('Pricing & Inventory')->schema([
                        TextInput::make('sku')
                            ->required()
                            ->label('SKU (Stock Keeping Unit)'),
                        TextInput::make('price')
                            ->required()
                            ->rules('regex:/^\d{1,6}(\.\d{0,2})?$/'),

                        TextInput::make('quantity')
                            ->numeric()
                            ->minValue(0)
                            ->required()
                            ->maxValue(100),
                        Select::make('type')->options([
                            'downloadable' => ProductTypeEnum::DOWNLOADABLE->value,
                            'deliverable' => ProductTypeEnum::DELIVERABLE->value,
                        ])
                    ])
                ]),
                Group::make()->schema([
                    Section::make('Status')->schema([
                        Toggle::make('is_visible')
                            ->label('Visibility')
                            ->helperText('Enable or disable visible product')
                            ->default(true),
                        Toggle::make('is_featured')
                            ->label('Featured')
                            ->helperText('Enable or disable featured product')
                            ->default(false),
                        DatePicker::make('published_at')
                            ->default(now()),
                    ]),
                    Section::make('Image')->schema([
                        FileUpload::make('image')
                            ->directory('form-attachments')
                            ->preserveFilenames()
                            ->image()
                            ->imageEditor(),
                    ])
                        ->collapsible(),
                    Section::make('Associations')->schema([
                        Select::make('brand_id')
                            ->label('Brand')
                            ->relationship('brand', 'name'),


                        Select::make('categories')
                            ->relationship('categories', 'name')
                            ->multiple()
                            ->preload()
                            ->createOptionForm([
                                Group::make()->schema([
                                    Forms\Components\Section::make([
                                        Forms\Components\TextInput::make('name')
                                            ->required()
                                            ->live(onBlur: true)
                                            ->unique()
                                            ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                                                $set('slug', Str::slug($state));
                                            }),

                                        Forms\Components\TextInput::make('slug')
                                            ->dehydrated()
                                            ->required()
                                            ->unique(Product::class, 'slug', ignoreRecord: true),

                                        Forms\Components\MarkdownEditor::make('description')
                                            ->columnSpanFull()
                                    ])->columns(2)
                                ]),
                                Forms\Components\Group::make()
                                    ->schema([
                                        Forms\Components\Section::make('Status')
                                            ->schema([
                                                Forms\Components\Toggle::make('is_visible')
                                                    ->label('Visibility')
                                                    ->helperText('Enable or disable category visibility')
                                                    ->default(true),

                                                Forms\Components\Select::make('parent_id')
                                                    ->relationship('parent', 'name')
                                            ])
                                    ])
                            ])
                    ])
                        ->collapsible()
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                ImageColumn::make('image'),
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('brand.name')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                IconColumn::make('is_visible')
                    ->sortable()
                    ->toggleable()
                    ->label('Visibility')
                    ->boolean()
                    ->toggle(),


                TextColumn::make('price')
                    ->toggleable()
                    ->sortable(),
                TextColumn::make('quantity')
                    ->toggleable()
                    ->sortable(),
                TextColumn::make('published_at')
                    ->date()
                    ->sortable(),
                TextColumn::make('type'),
            ])
            ->filters([
                TernaryFilter::make('is_visible')
                    ->label('Visibility')
                    ->boolean()
                    ->trueLabel('Only visible products')
                    ->falseLabel('Only not visible products')
                    ->native(false),
                SelectFilter::make('brand')
                    ->relationship('brand', 'name')
            ])
            ->actions([
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\ViewAction::make(),
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\DeleteAction::make(),
                ])
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
            BrandRelationManager::class
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
