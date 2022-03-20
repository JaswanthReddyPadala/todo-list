import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoItem, todoStatus } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  maintTodoList: TodoItem[] = [];

  id: number = 1;

  constructor() { }
  
  private todoDataSource = new Subject<TodoItem[]>();
  todoData = this.todoDataSource.asObservable();

  // Adding a Todo Item
  addTodoItem(description: string){
    let todoObj: TodoItem = {} as TodoItem;
    todoObj.description = description;
    todoObj.id = ++this.id;
    todoObj.status = todoStatus.Pending;

    this.maintTodoList.push(todoObj);

    this.todoDataSource.next(this.maintTodoList);
  }

  // Mark Completed a Todo Item
  markCompletedTodoItem(id: number){
    this.maintTodoList.forEach(each => each.id == id ? each.status = todoStatus.Completed : todoStatus.Pending );

    this.todoDataSource.next(this.maintTodoList);
  }

  //Redo-ing a Todo Item
  redoTodoItem(id :number){
    this.maintTodoList.forEach(each => each.id == id ? each.status = todoStatus.Pending : todoStatus.Completed );

    this.todoDataSource.next(this.maintTodoList);
  }

  // Removing a Todo Item
  deleteTodoItem(id: number){
    this.maintTodoList = this.maintTodoList.filter(each => each.id != id );

    this.todoDataSource.next(this.maintTodoList);
  }

  
}
