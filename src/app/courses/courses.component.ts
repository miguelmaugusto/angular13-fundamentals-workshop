import { Component, OnInit } from '@angular/core';
import {Course} from '../common/models/course';
import {CoursesService} from '../common/services/courses.service';
import {Observable} from 'rxjs';

const emptyCourse: Course = {
  id: null,
    title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  courses$: Observable<Course[]>;

  selectedCourse = emptyCourse;
  originalTitle = '';

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.fetchCourses();
  }

  private fetchCourses() {
    this.courses$ = this.coursesService.all();
  }

  selectCourse(course: Course){
    this.selectedCourse = course;
    this.originalTitle = course.title;
  }

  deleteCourse(id: string) {
    console.log("Delete course", id);
  }

  reset(){
    this.selectCourse({...emptyCourse});
  }

  save(course: Course) {
    if(course.id){
      this.updateCourse(course);
    }else {
      this.createCourse(course);
    }

    //this.selectCourse(course);
  }

  private createCourse(course: Course) {
    this.coursesService.create(course).subscribe(result=> this.fetchCourses())
  }

  private updateCourse(course: Course) {
    this.coursesService.update(course).subscribe(result=> this.fetchCourses())
  }
}
