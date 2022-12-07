import { Component, OnInit } from '@angular/core';
import {LessonsService} from '../common/services/lessons.service';
import {Lesson} from '../common/models/lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons$;
  lessons = [];

  selectedLesson = null;
  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.fetchLessons();
  }

  private fetchLessons() {
    this.lessonsService.all().subscribe(
      (result: Lesson[]) => this.lessons = result
    )
  }

  selectLesson(lesson: Lesson){
    this.selectedLesson = lesson;
    console.log("Selected lesson ", this.selectedLesson);
  }

  deleteLesson(id:string){
    console.log("Delete lesson ", id);
  }

}
