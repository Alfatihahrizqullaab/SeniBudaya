import { Routes } from '@angular/router';
import { Beranda } from './beranda/beranda';
import { Budaya as BudayaComponent } from './budaya/budaya';
import { Event as EventComponent } from './event/event';
import { TentangKami } from './tentang-kami/tentang-kami';
import { HubungiKami } from './hubungi-kami/hubungi-kami';
import { Login } from './login/login';
import { TambahBudaya } from './tambah-budaya/tambah-budaya';
import { TambahEvent } from './tambah-event/tambah-event';
import { DetailBudaya } from './detail-budaya/detail-budaya';
import { DetailEvent } from './detail-event/detail-event';
import { DaftarEvent } from './daftar-event/daftar-event';
import { authGuard } from './guards/auth.guard';
import { EditBudaya } from './edit-budaya/edit-budaya';

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
    },
    {
        path: 'login',
        component: Login,
        title: 'Login'
    },
    // {
    //     path: '',
    //     component: ''
    // }
    {
        path: 'tambah-budaya',
        component: TambahBudaya,
        title: 'Tambah-Budaya',
        canActivate: [authGuard]
    },
    {
        path: 'tambah-event',
        component: TambahEvent,
        title: 'Tambah-Event',
        canActivate: [authGuard]
    },
    {
        path: 'detail-budaya/:id',
        component: DetailBudaya,
        title: 'Detail-Budaya'
    },
    {
        path: 'detail-event/:id',
        component: DetailEvent,
        title: 'Detail-event'
    },
    {
        path: 'edit-budaya/:id',
        component: EditBudaya,
        title: 'Edit-budaya'
    },
    {
        path: 'daftar-event/:id',
        component: DaftarEvent,
        title: 'Daftar-event'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
    


];
