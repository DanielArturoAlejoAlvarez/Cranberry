import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';

//Model
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {

  tasks: Task[]; // Array objs type Task from Class Task
  title: string;

  constructor(private _taskService: TaskService) {

    this._taskService.getTask()
        .subscribe(tasks=>{
          this.tasks = tasks
          console.log(this.tasks)
        })
  }

  ngOnInit() {
  }

  addTask(e) {
    e.preventDefault();
    //console.log(this.title)
    const newTask: Task = {
      title: this.title,
      isDone: false
    };
    this._taskService.addTask(newTask)
        .subscribe(task=>{
          this.tasks.push(task);//from TaskService
          //console.log(this.tasks)
          this.title="";
        });

  }

  deleteTask(id) {
    //console.log(id);
    const response = confirm("Are you sure to delete it?");
    if(response) {
      const tasks = this.tasks;
      this._taskService.deleteTask(id)
      .subscribe(data=>{
        console.log(data);
        if(data.n==1) {
          for(let i=0; i<tasks.length; i++) {
            if(tasks[i]._id==id) {
              tasks.splice(i,1);
            }
          }
        }
      })
    }else {
      return;
    }


  }


  updateStatus(task: Task) {
    //console.log(id);
    const newTask = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };

    this._taskService.updateTask(newTask)
        .subscribe(res=>{
            task.isDone = !task.isDone
            console.log(newTask)
        })
  }


}
