<?php

namespace App\Filament\Resources\BrandResource\RelationManagers;

use App\Enums\ProductTypeEnum;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\Tabs\Tab;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductsRelationManager extends RelationManager
{
    protected static string $relationship = 'products';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Tabs::make('Products')->tabs([
                    Tab::make('General Info')->schema([
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
                    ]),
                    Tab::make('Pricing & Inventory')->schema([
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
                    ]),
                    Tab::make('Status')->schema([
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
                    Tab::make('Image & Categories')->schema([
                        FileUpload::make('image')
                            ->directory('form-attachments')
                            ->preserveFilenames()
                            ->image()
                            ->imageEditor(),
                        Select::make('categories')
                            ->relationship('categories', 'name')
                            ->multiple(),
                    ]),
                ])->columnSpanFull()
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('name')
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
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
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
}
