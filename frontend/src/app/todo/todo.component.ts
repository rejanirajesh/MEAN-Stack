import { Component, OnInit } from '@angular/core';
import { RestclientService } from '../restclient.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks : any[];
  taskForm : FormGroup;

  constructor(private RestClient: RestclientService, public fb : FormBuilder) {
    this.taskForm = this.fb.group(
      {
        description:['']
      }
    )
   }

  getTask() {
    this.RestClient.getTask().subscribe((data:any)=> {
      this.tasks = data.tasks;

    });
  }

  addTask() {
    this.RestClient.addTask(this.taskForm.value).subscribe((data:any)=> {
      this.tasks.push(this.taskForm.value);
    });
  }

  deleteTask(task:any) {
    this.RestClient.deleteTask(task._id).subscribe((data)=> {
      this.tasks = this.tasks.filter(item => item!= task);
    });
  }


  ngOnInit(): void {
    this.getTask();
  }

}