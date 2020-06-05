import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsGetStartedComponent } from './rxjs-get-started.component';


const routes: Routes = [
  { path: '', component: RxjsGetStartedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsGetStartedRoutingModule { }
