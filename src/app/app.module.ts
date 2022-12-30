import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { QaGeneratorComponent } from './qa-generator/qa-generator.component';
import { AccordianComponent } from './accordian/accordian.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    QaGeneratorComponent,
    AccordianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
