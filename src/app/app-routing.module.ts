import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordianComponent } from './accordian/accordian.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { QaGeneratorComponent } from './qa-generator/qa-generator.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'button', component: ButtonComponent},
  {path:'qrGen',component: QaGeneratorComponent},
  {path:'accordian',component: AccordianComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
