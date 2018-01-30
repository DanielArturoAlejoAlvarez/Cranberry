import { Injectable } from '@angular/core';
//
import { HttpClient } from '@angular/common/http';
//map operator
import 'rxjs/Rx';
//model Task
import { Task } from '../Task'



@Injectable()
export class TaskService {

  domain: string = 'http://localhost:3000';

  constructor(private _httpClient: HttpClient) { }

  getTask() { //receive an array the tasks
    return this._httpClient.get<Task[]>(`${this.domain}/api/tasks`)
        .map(res => res);
  }
  addTask(newTask: Task) {  //newTask is of type Task
    return this._httpClient.post<Task>(`${this.domain}/api/tasks`, newTask)
        .map(res => res)
  }
  updateTask(newTask) {
    return this._httpClient.put<Task>(`${this.domain}/api/tasks/${newTask._id}`, newTask)
        .map(res => res)
  }
  deleteTask(id) {
    return this._httpClient.delete<Task>(`${this.domain}/api/tasks/${id}`)
        .map(res => res)
  }

}
