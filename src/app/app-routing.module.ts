import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent }   from './main/main.component';

export const AppRoutes: Routes = [
   {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
   },
   {
   path: '',
   component: MainComponent,
   children: [{
      path: 'dashboard', loadChildren: ()=> 
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
   }],
   },
   {
      path: '**',
      redirectTo: 'session'
   } 
];
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }