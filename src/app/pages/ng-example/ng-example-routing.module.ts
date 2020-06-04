import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgExampleComponent } from './ng-example.component';

const routes: Routes = [
  { path: '', component: NgExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgExampleRoutingModule { }
