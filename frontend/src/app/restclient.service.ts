import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestclientService {
  apiURL = 'http://127.0.0.1:8000/api/'

  getTask(){
    return this.httpClient.get(this.apiURL + 'task/list');
  }

  addTask(task:any){
    return this.httpClient.post<any>(this.apiURL + 'task/add' , task);
  }

  deleteTask(task:any){
    return this.httpClient.delete(this.apiURL + 'task/delete/' + task);
  }
  constructor(private httpClient : HttpClient) { }
}
