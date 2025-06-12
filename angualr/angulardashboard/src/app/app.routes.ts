import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { roleGuard } from './role.guard';

export const routes: Routes = [
    { path: 'signup', loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent) },
    { path: '', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },

    {
        path: 'dashboard',
        canActivate: [authGuard],
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'admin',
        canActivate:[authGuard,roleGuard],
        data: { roles: 'admin' },
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent)
    }
    ,
    {
        path: 'unauthorized', loadComponent: () => import('./unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent)
    }
];
