import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TodoItem, todoStatus } from 'src/app/interfaces/todo-item';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  
  todoList: TodoItem[] = [];
  
  totalTaskCount: number  = 0;
  pendingTaskCount: number = 0;
  completedTaskCount: number = 0;

  constructor(private todoService : TodoService) {
    this.todoService.todoData.subscribe(data => this.todoList = data);
    
    this.todoService.todoData.subscribe(data => this.totalTaskCount = data.length);
    this.todoService.todoData.subscribe(data => this.pendingTaskCount = (data.filter(each => each.status == todoStatus.Pending)).length);
    this.todoService.todoData.subscribe(data => this.completedTaskCount = (data.filter(each => each.status == todoStatus.Completed)).length);
   }
   
  ngOnInit(): void {
  }

}
