import { Injectable } from '@angular/core';
import {Lesson} from '../models/lesson';
import {from} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Course} from '../models/course';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  model = 'lessons';

  all(){
    return this.http.get(this.getUrl());
  }

  find(id:string){
    return this.http.get(this.getUrlWithId(id))
  }

  create(lesson:Lesson){
    return this.http.post(this.getUrl(),lesson)
  }

  update(lesson:Lesson){
    return this.http.put(this.getUrlWithId(lesson.id),lesson)
  }

  delete(id:string){
    return this.http.delete(this.getUrlWithId(id))
  }
  private getUrl(){
    return `${BASE_URL}/${this.model}`
  }

  private getUrlWithId(id:string){
    return `${this.getUrl()}/${id}`;
  }

  constructor(private http: HttpClient) {
  }
}
