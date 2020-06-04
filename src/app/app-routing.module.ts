import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'ng-example', loadChildren: () => import('./pages/ng-example/ng-example.module').then(m => m.NgExampleModule) },
  { path: 'ng-get-started', loadChildren: () => import('./pages/ng-get-started/ng-get-started.module').then(m => m.NgGetStartedModule) },
  { path: 'rxjs-get-started', loadChildren: () => import('./pages/rxjs-get-started/rxjs-get-started.module').then(m => m.RxjsGetStartedModule) },
  { path: 'rxjs-example', loadChildren: () => import('./pages/rxjs-example/rxjs-example.module').then(m => m.RxjsExampleModule) },
  { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
