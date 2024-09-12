<?php

namespace App\Exports;

use Illuminate\Database\Eloquent\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;

class StudentsExport implements FromCollection
{

    public function __construct(public Collection $records)
    {

    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return $this->records;
    }
}
