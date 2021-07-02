import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgGetStartedComponent } from './ng-get-started/ng-get-started.component';
import { NgExampleComponent } from './ng-example/ng-example.component';
import { MainComponent } from './main/main.component';
import { NgrxDemoComponent } from './ngrx-demo/ngrx-demo.component';
import { NgAnimationComponent } from './ng-animation/ng-animation.component';
import { InjectComponent } from './inject/inject.component';
import { ThirdPartyComponent } from './third-party/third-party.component';


const routes: Routes = [
  { path: 'ng-get-started', component: NgGetStartedComponent },
  { path: 'ng-example', component: NgExampleComponent },
  { path: 'ngrx', component: NgrxDemoComponent },
  { path: 'ng-animation', component: NgAnimationComponent },
  { path: 'inject', component: InjectComponent },
  { path: 'third-party', component: ThirdPartyComponent },
  { path: '', component: MainComponent }
  // { path: '**', redirectTo: '/angular' }
  // { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
