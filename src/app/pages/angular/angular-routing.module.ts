import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgGetStartedComponent } from './ng-get-started/ng-get-started.component';
import { NgExampleComponent } from './ng-example/ng-example.component';
import { AngularComponent } from './main/angular.component';
import { NgrxPage1Component } from './ngrx-page1/ngrx-page1.component';
import { NgrxPage2Component } from './ngrx-page2/ngrx-page2.component';


const routes: Routes = [
  { path: '', component: AngularComponent },
  { path: 'ng-get-started', component: NgGetStartedComponent },
  { path: 'ng-example', component: NgExampleComponent },
  { path: 'ngrx1', component: NgrxPage1Component },
  { path: 'ngrx2', component: NgrxPage2Component }
  // { path: '**', redirectTo: '/angular/main' }
  // { path: '**', component: AngularComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
