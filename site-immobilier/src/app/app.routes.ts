import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Recherche } from './pages/recherche/recherche';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage/homepage').then(m => m.Homepage)
    },
    {
        path: 'recherche',
        loadComponent: () => import('./pages/recherche/recherche').then(m => m.Recherche)
    }
];
