import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
    { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) }
];
