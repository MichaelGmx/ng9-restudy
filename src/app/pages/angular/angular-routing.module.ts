import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgGetStartedComponent } from './ng-get-started/ng-get-started.component';
import { NgExampleComponent } from './ng-example/ng-example.component';
import { DomEventComponent } from './dom-event/dom-event.component';
import { AngularComponent } from './main/angular.component';


const routes: Routes = [
  { path: '', component: AngularComponent },
  { path: 'ng-get-started', component: NgGetStartedComponent },
  { path: 'ng-example', component: NgExampleComponent },
  { path: 'dom-event', component: DomEventComponent }
  // { path: '**', redirectTo: '/angular/main' }
  // { path: '**', component: AngularComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
