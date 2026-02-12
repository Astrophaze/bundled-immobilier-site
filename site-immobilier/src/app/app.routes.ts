import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Recherche } from './pages/recherche/recherche';

export const routes: Routes = [
    {
        path: '',
        component: Homepage
    },
    {
        path: 'recherche',
        component: Recherche
    }
];
