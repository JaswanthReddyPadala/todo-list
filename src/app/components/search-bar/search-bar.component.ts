import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

export enum todoStatus {
  Pending = "Pending",
  Completed = "Completed"
}

export interface Todo {
  id: number,
  description: string,
  status: todoStatus
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  id: number = 1;
  description: string = "";
  status = todoStatus;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.description != "" && this.description[0] != " ") {
      this.todoService.addTodoItem(this.description);
      this.description = "";
    }

  }

  addTodoEnter(event: any) {

    if (event.code === "Enter" && this.description != "" && this.description[0] != " ") {
      this.todoService.addTodoItem(this.description);
      this.description = "";
    }

  }

}
