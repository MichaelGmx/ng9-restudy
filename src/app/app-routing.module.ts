import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularRoutingModule } from './pages/angular/angular-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'angular', loadChildren: () => import('./pages/angular/angular.module').then(m => m.AngularModule)},
  // { path: 'ng-example', loadChildren: () => import('./pages/angular/ng-example/ng-example.module').then(m => m.NgExampleModule) },
  // { path: 'ng-get-started', loadChildren: () => import('./pages/angular/ng-get-started/ng-get-started.module').then(m => m.NgGetStartedModule) },
  { path: 'rxjs-get-started', loadChildren: () => import('./pages/rxjs/rxjs-get-started/rxjs-get-started.module').then(m => m.RxjsGetStartedModule) },
  { path: 'rxjs-example', loadChildren: () => import('./pages/rxjs/rxjs-example/rxjs-example.module').then(m => m.RxjsExampleModule) },
  { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    AngularRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
