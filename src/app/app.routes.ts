import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AboutComponent }  from './about/about.component';
import { HomePage }    from '../pages/home/home';
const appRoutes: Routes = [
  { path: '', component: HomePage },
//  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomePage }
];
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);