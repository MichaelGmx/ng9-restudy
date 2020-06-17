import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularRoutingModule } from './pages/angular/angular-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'angular', loadChildren: () => import('./pages/angular/angular.module').then(m => m.AngularModule)},
  { path: 'rxjs', loadChildren: () => import('./pages/rxjs/rxjs.module').then(m => m.RxjsModule)},

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
