import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsGetStartedComponent } from './rxjs-get-started/rxjs-get-started.component';
import { MainComponent } from './main/main.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';


const routes: Routes = [
  { path: 'rxjs-get-started', component: RxjsGetStartedComponent },
  { path: 'rxjs-example', component: RxjsExampleComponent },
  { path: '', component: MainComponent }
  // { path: '**', redirectTo: '/rxjs' }
  // { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
