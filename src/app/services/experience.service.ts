import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IExperience } from '../types/iexperience';

const EXPERIENCE_DATA: IExperience[] = [
  {
    id: 1,
    role: 'MEAN Stack Developer',
    company: 'Contellect Technologies Inc.',
    date: 'Apr. 2025 - Dec. 2025',
    location: 'Nasr City, Cairo, Egypt',
    description: '&nbsp;&bull;&nbsp; Built REST APIs using Node.js and Express.js.\n&nbsp;&bull;&nbsp; Added 15+ API endpoints for new product features.\n&nbsp;&bull;&nbsp; Developed Angular pages and reusable UI components.\n&nbsp;&bull;&nbsp; Designed MongoDB schemas and implemented validation with Mongoose.\n&nbsp;&bull;&nbsp; Added JWT authentication and OAuth 2.0 to secure API endpoints.\n&nbsp;&bull;&nbsp; Fixed bugs and improved existing backend features.\n&nbsp;&bull;&nbsp; Wrote unit and integration tests using Jasmine and Karma.\n&nbsp;&bull;&nbsp; Used Docker for local development.\n&nbsp;&bull;&nbsp; Worked with Git and GitHub for code reviews and pull requests.\n&nbsp;&bull;&nbsp; Took part in sprint planning, daily stand-ups, and sprint reviews.'
  },
  {
    id: 2,
    role: 'Coding Instructor (Part-time)',
    company: 'iSchool',
    date: 'Apr. 2026 - Jun. 2026',
    location: 'Remote',
    description: '&nbsp;&bull;&nbsp; Taught Scratch, Python, and programming fundamentals.\n&nbsp;&bull;&nbsp; Helped students build coding projects and solve programming problems.\n&nbsp;&bull;&nbsp; Introduced AI and Machine Learning through simple hands-on activities.\n&nbsp;&bull;&nbsp; Reviewed assignments and provided feedback to students.'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  getExperience(): Observable<IExperience[]> {
    return of(EXPERIENCE_DATA);
  }
}
