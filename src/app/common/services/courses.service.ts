import {Injectable} from '@angular/core';
import {Course} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: '2',
      title: 'Javascript HARDEST PARTS!!!',
      description: 'Learn the Javascript Like a pro',
      percentComplete: 66,
      favorite: true
    },
    {
      id: '3',
      title: 'Rapid Application Development Patterns',
      description: 'This must be done eventually',
      percentComplete: 5,
      favorite: true
    }];
}
