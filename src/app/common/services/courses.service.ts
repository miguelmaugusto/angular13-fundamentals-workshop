import {Injectable} from '@angular/core';
import {Course} from '../models/course';
import {HttpClient} from '@angular/common/http';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  model = 'courses';

  all(){
    return this.http.get(this.getUrl());
  }

  find(id:string){
    return this.http.get(this.getUrlWithId(id))
  }

  create(course:Course){
    return this.http.post(this.getUrl(),course)
  }

  update(course:Course){
    return this.http.put(this.getUrlWithId(course.id),course)
  }

  delete(id:string){
    return this.http.delete(this.getUrlWithId(id))
  }

  private getUrl(){
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithId(id:string){
    return `${this.getUrl()}/${id}`;
  }

  constructor(private http: HttpClient) {
  }
}
