import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { MainComponent }   from './main/main.component';
import { AuthComponent }   from './auth/auth.component';
import { HorizontalLayoutComponent } from './horizontal-layout/horizontal-layout.component';

export const AppRoutes: Routes = [
   {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
   },
   {
      path: 'session',loadChildren: () =>
      import('./session/session.module').then(m =>m.SessionDemoModule)
   },
   {
   path: '',
   component: MainComponent,
   canActivate: [AuthGuard],
   runGuardsAndResolvers: 'always',
   children: [{
      path: 'dashboard', loadChildren: ()=> 
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
   }],
   },
   {
      path: 'horizontal',
      component: HorizontalLayoutComponent,
      children: [{
         path: '',loadChildren: ()=>
         import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },{
         path: 'dashboard',loadChildren: ()=>
         import('./dashboard/dashboard.module').then(m => m. DashboardModule)
      },
      ],
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

