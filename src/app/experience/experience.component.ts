import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { NgFor } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports:[NgFor]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      company: 'Freelance',
      position: 'Software Developer',
      startDate: 'July 2024',
      endDate: 'Present',
      responsibilities: [
        'Led development of mission-critical applications using Angular and Node.js',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 40%'
      ],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Docker', 'AWS','Lambda Function']
    },
    {
      company: 'Adapt.io',
      position: 'Software Developer',
      startDate: 'March 2024',
      endDate: 'July 2024',
      responsibilities: [
        'Developed and maintained web applications using React',
        'Collaborated with UX team to implement responsive designs',
        'Optimized database queries improving application performance'
      ],
      technologies: ['React', 'JavaScript', 'REST APIs']
    }
    // Add more experiences as needed
  ];

  constructor() { }

  ngOnInit(): void { }
}
