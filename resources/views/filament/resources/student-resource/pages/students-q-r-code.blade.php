<x-filament-panels::page>


{{QrCode::size(120)->style('round')->generate($this->getRecord()->email)}}

</x-filament-panels::page>
