import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    
    imports: [
      BrowserModule,
      AppComponent,
      HeaderComponent,
      ExperienceComponent 
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
      })
  export class AppModule { }