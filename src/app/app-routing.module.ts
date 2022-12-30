import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { QaGeneratorComponent } from './qa-generator/qa-generator.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'button', component: ButtonComponent},
  {path:'qrGen',component: QaGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
