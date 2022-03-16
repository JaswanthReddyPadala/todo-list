import { Component, Input, OnInit } from '@angular/core';
import { Todo, todoStatus } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent implements OnInit {

  todoListtems: Array<Todo> = [];

  // pendingTodoItems: Array<Todo> = [];
  // completedTodoItems: Array<Todo> = [];
  constructor() { }


  ngOnInit(): void {
  }

  newTodo(newItem: Todo) {
    let newObj = newItem;
    this.todoListtems.push(newObj);
    // console.log(this.todoListtems);
  }

  markCompletedTodoItem(num: number){
    console.log(num);
    this.todoListtems.forEach(each => each.id==num ? each.status = todoStatus.Completed : todoStatus.Pending );
    // this.pendingTodoItems = this.todoListtems.filter(each => each.status=todoStatus.Pending);
    console.log(this.todoListtems);
  }

  redoTodoItem(num :number){
    console.log(num);
    this.todoListtems.forEach(each => each.id==num ? each.status = todoStatus.Pending : todoStatus.Completed );
    // this.completedTodoItems = this.todoListtems.filter(each => each.status=todoStatus.Completed);
    console.log(this.todoListtems);
  }

  deleteTodoItem(num: number){
    this.todoListtems = this.todoListtems.filter(each => each.id!=num );
  }
}
