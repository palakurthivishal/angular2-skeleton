import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './components/dashboard.component';

const dashboardRoutes: Routes = [
    { path: '', component: DashboardComponent,pathMatch: 'full' }
];

export const dashboardRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
