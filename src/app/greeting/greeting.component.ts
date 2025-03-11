import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-greeting',

  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
 

})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "Deepan",
    title: "Hi all, I'm Deepan",
    subTitle: "A software developer passionate continuous Growth and Development",
    resumeLink: "https://drive.google.com/file/d/1YafWBqzJzA60fZJ6_mLRHY0pcBUTOFBZ/view?usp=sharing"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
