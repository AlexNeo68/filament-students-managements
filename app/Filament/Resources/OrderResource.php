<?php

namespace App\Filament\Resources;

use App\Enums\OrderStatusEnum;
use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers;
use App\Models\Customer;
use App\Models\Order;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Wizard;
use Filament\Forms\Components\Wizard\Step;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';
    protected static ?string $navigationGroup = 'Shop';
    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Wizard::make()->schema([
                    // customer_id
                    // number
                    // total_price
                    // status
                    // shipping_price
                    // notes

                    Step::make('Info')->schema([
                        Select::make('customer_id')
                            ->relationship('customer', 'name')
                            ->label('Customer')
                            ->required(),

                        TextInput::make('number')
                            ->dehydrated()
                            ->disabled()
                            ->required()
                            ->default('NO-' . random_int(10000, 1000000)),
                        Select::make('status')
                            ->required()
                            ->options([
                                'pending' => OrderStatusEnum::PENDING->value,
                                'processing' => OrderStatusEnum::PROCESSING->value,
                                'completed' => OrderStatusEnum::COMPLETED->value,
                                'declined' => OrderStatusEnum::DECLINED->value,
                            ]),
                        TextInput::make('shipping_price')
                            ->label('Shipping Cost')
                            ->required(),

                        Textarea::make('notes')->columnSpan('full')
                    ])->columns(2),
                    Step::make('Order Items')->schema([
                        Repeater::make('items')->schema([
                            //                             product_id
                            // quantity
                            // unit_price
                            Select::make('product_id')
                                ->options(
                                    Product::query()->pluck('name', 'id')
                                )
                                ->required()
                                ->reactive()
                                ->afterStateUpdated(fn($state, Forms\Set $set) =>
                                $set('unit_price', Product::find($state)?->price ?? 0)),

                            Forms\Components\TextInput::make('quantity')
                                ->numeric()
                                ->live()
                                ->dehydrated()
                                ->default(1)
                                ->required(),

                            Forms\Components\TextInput::make('unit_price')
                                ->label('Unit Price')
                                ->disabled()
                                ->dehydrated()
                                ->numeric()
                                ->required(),

                            Forms\Components\Placeholder::make('total_price')
                                ->label('Total Price')
                                ->content(function ($get) {
                                    return $get('quantity') * $get('unit_price');
                                })
                        ])->columns(4)
                    ])
                ])
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('number')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('customer.name')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),

                Tables\Columns\TextColumn::make('status')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Order Date')
                    ->date(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\ViewAction::make(),
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\DeleteAction::make()
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
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }
}
