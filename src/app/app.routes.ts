import {Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GreetingComponent } from './greeting/greeting.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';


export const routes: Routes = [
    { path:'', component: GreetingComponent },
    {path:'experience',component:ExperienceComponent},
    {path:'education',component:EducationComponent}
    
   
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }