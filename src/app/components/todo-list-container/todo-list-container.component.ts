import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo, todoStatus } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent implements OnInit {

  todoListtems: Array<Todo> = [];

  constructor(private todoService: TodoService) {
    this.todoService.todoData.subscribe(data => this.todoListtems = data);
  }


  ngOnInit(): void {
  }
}
