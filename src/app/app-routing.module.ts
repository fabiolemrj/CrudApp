import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramepageComponent } from './shared/framepage/framepage.component';
import { MainComponent } from './shared/main/main.component';


const routes: Routes = [
  {path:'', component:FramepageComponent,
children:[{path:'',component:MainComponent}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
