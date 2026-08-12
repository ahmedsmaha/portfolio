import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISkill } from '../types/iskill';

const SKILL_DATA: ISkill[] = [
  { id: 1, name: 'Angular', category: 'Frontend & UI' },
  { id: 2, name: 'TypeScript', category: 'Frontend & UI' },
  { id: 3, name: 'JavaScript (ES6+)', category: 'Frontend & UI' },
  { id: 4, name: 'RxJS', category: 'Frontend & UI' },
  { id: 5, name: 'HTML5', category: 'Frontend & UI' },
  { id: 6, name: 'CSS3', category: 'Frontend & UI' },
  { id: 7, name: 'Kendo UI', category: 'Frontend & UI' },
  { id: 8, name: 'Node.js', category: 'Backend' },
  { id: 9, name: 'Express.js', category: 'Backend' },
  { id: 10, name: 'REST APIs', category: 'Backend' },
  { id: 11, name: 'Microservices', category: 'Backend' },
  { id: 12, name: 'JWT Authentication', category: 'Backend' },
  { id: 13, name: 'OAuth 2.0', category: 'Backend' },
  { id: 14, name: 'Middleware Development', category: 'Backend' },
  { id: 15, name: 'MongoDB', category: 'Databases' },
  { id: 16, name: 'Mongoose', category: 'Databases' },
  { id: 17, name: 'Redis', category: 'Databases' },
  { id: 18, name: 'Elasticsearch', category: 'Databases' },
  { id: 19, name: 'SQL', category: 'Databases' },
  { id: 20, name: 'AWS', category: 'Cloud & DevOps' },
  { id: 21, name: 'Docker', category: 'Cloud & DevOps' },
  { id: 22, name: 'Git', category: 'Cloud & DevOps' },
  { id: 23, name: 'GitHub', category: 'Cloud & DevOps' },
  { id: 24, name: 'Bitbucket Pipelines', category: 'Cloud & DevOps' },
  { id: 25, name: 'CI/CD', category: 'Cloud & DevOps' },
  { id: 26, name: 'Postman', category: 'Testing & Quality' },
  { id: 27, name: 'Unit Testing', category: 'Testing & Quality' },
  { id: 28, name: 'Integration Testing', category: 'Testing & Quality' },
  { id: 29, name: 'Jira', category: 'Testing & Quality' },
  { id: 30, name: 'Webpack', category: 'Testing & Quality' }
];

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  getSkills(): Observable<ISkill[]> {
    return of(SKILL_DATA);
  }
}
