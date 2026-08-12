import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEducation } from '../types/ieducation';

const EDUCATION_DATA: IEducation[] = [
  { 
    id: 1, 
    degree: 'Bachelor of Computer Science', 
    institution: 'Misr Higher Institute for Commerce and Computers (MET)', 
    date: 'Aug. 2017 - Nov. 2022', 
    location: 'El Mansoura, Dakahlia, Egypt' 
  }
];

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  getEducation(): Observable<IEducation[]> {
    return of(EDUCATION_DATA);
  }
}
