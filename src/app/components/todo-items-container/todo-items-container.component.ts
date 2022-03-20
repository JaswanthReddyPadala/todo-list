import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from '../search-bar/search-bar.component';

export enum viewOptions {
  Pending = "Pending",
  Completed = "Completed"
}

@Component({
  selector: 'app-todo-items-container',
  templateUrl: './todo-items-container.component.html',
  styleUrls: ['./todo-items-container.component.css']
})


export class TodoItemsContainerComponent implements OnInit {

  viewOption: string = viewOptions.Pending;

  todoItems: Array<Object> = [];

  constructor(private todoService: TodoService) {
    this.todoService.todoData.subscribe(data => this.todoItems = data);
  }

  ngOnInit(): void {
  }

  viewPendingItems(): void {
    this.viewOption = viewOptions.Pending
  }

  viewCompletedItems(): void {
    this.viewOption = viewOptions.Completed
  }
}
