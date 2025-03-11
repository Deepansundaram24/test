import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      heading: "B.E - Electrical and Electronics Engineering",
      duration: "2024",
      subtitle: "PSG College of Technology",
      content: "PSG College of Technology, Coimbatore.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2019",
      subtitle: "SRV Boys Hr Secondary  School",
      content: "SRV Boys Hr Secondary  School\n" +
        "Major: PCM.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    // {
    //   heading: "Secondary Stage(10th)",
    //   duration: "2014",
    //   subtitle: "CBSE Board",
    //   content: "Successfully completed my high school studies in 2014 from Georgions Academy, Shikohabad.",
    //   className1: "mar-right",
    //   className2: "prt_about_learnbox_left"
    // }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
