import { Routes } from '@angular/router';
import { Beranda } from './beranda/beranda';
import { Budaya as BudayaComponent } from './budaya/budaya';
import { Event as EventComponent } from './event/event';
import { TentangKami } from './tentang-kami/tentang-kami';
import { HubungiKami } from './hubungi-kami/hubungi-kami';

export const routes: Routes = [
    {
        path: '',
        component: Beranda,
        title: 'Beranda'
    },
    {
        path: 'budaya',
        component: BudayaComponent,
        title: 'Budaya'
    },
    {
        path: 'event',
        component: EventComponent,
        title: 'Event'
    },
    // {
    //     path: 'tentang-kami',
    //     component: TentangKami,
    //     title: 'Tentang kami'
    // },
    {
        path: 'hubungi-kami',
        component: HubungiKami,
        title: 'Hubungi-kami'
    }
    // {
    //     path: '',
    //     component: ''
    // }

];
