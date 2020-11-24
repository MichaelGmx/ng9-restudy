import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgGetStartedComponent } from './ng-get-started/ng-get-started.component';
import { NgExampleComponent } from './ng-example/ng-example.component';
import { MainComponent } from './main/main.component';
import { NgrxPageComponent } from './ngrx-page/ngrx-page.component';
import { NgAnimationComponent } from './ng-animation/ng-animation.component';
import { AngularxQrcodeComponent } from './angularx-qrcode/angularx-qrcode.component';
import { Html2canvasComponent } from './html2canvas/html2canvas.component';


const routes: Routes = [
  { path: 'ng-get-started', component: NgGetStartedComponent },
  { path: 'ng-example', component: NgExampleComponent },
  { path: 'ngrx', component: NgrxPageComponent },
  { path: 'ng-animation', component: NgAnimationComponent },
  { path: 'angularx-qrcode', component: AngularxQrcodeComponent },
  { path: 'html2canvas', component: Html2canvasComponent },
  { path: '', component: MainComponent }
  // { path: '**', redirectTo: '/angular' }
  // { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
