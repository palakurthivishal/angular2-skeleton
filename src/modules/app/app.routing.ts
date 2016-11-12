import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo : '/dashboard',pathMatch: 'full' },
    { path: 'dashboard', loadChildren : '../dashboard/dashboard.module' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
