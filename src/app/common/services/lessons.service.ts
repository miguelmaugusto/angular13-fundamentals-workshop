import { Injectable } from '@angular/core';
import {Lesson} from '../models/lesson';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  lessons: Lesson[] = [
    { id:'1', title: 'Hello Angular' },
    { id:'2', title: 'Component Fundamentals' },
    { id:'3', title: 'Template Driven Forms' },
    { id:'4', title: 'Angular Services' },
    { id:'5', title: 'Server Communication' },
    { id:'6', title: 'Component Driven Architecture' },
    { id:'7', title: 'Angular Routing' },
    { id:'8', title: 'Unit Testing Fundamentals' },
  ];

  lessons$ = from(this.lessons);
}
