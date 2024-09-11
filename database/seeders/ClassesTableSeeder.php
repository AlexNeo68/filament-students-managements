<?php

namespace Database\Seeders;

use App\Models\Classes;
use App\Models\Section;
use App\Models\Student;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class ClassesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Classes::factory()
        ->count(10)
        ->sequence(fn($sequence) => ['name' => 'Classes ' . $sequence->index+1 ])
        ->has(
            Section::factory()
            ->count(2)
            ->state(
                new Sequence(
                    ['name' => 'Section A'],
                    ['name' => 'Section B']
                )
            )->has(

                    Student::factory()
                    ->count(5)
                    ->state(
                        function(array $attributes, Section $section){
                            return ['classes_id' => $section->classes_id];
                        }
                    )
                
            )
            
        )
        ->create();
    }
}
