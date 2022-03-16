import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../search-bar/search-bar.component';

export enum viewOptions {
  Pending= "Pending",
  Completed= "Completed"
}

@Component({
  selector: 'app-todo-items-container',
  templateUrl: './todo-items-container.component.html',
  styleUrls: ['./todo-items-container.component.css']
})


export class TodoItemsContainerComponent implements OnInit {

  viewOption: string = viewOptions.Pending;

  constructor() { }
  @Input() todoItems  : Array<Object> = [];

  @Output() markCompletedEvent  = new EventEmitter<number>();
  @Output() redoTodoEvent = new EventEmitter<number>();
  @Output() deleteTodoEvent = new EventEmitter<number>();

  ngOnInit(): void {
  }

  // showTodoItems(){
  //   console.log(this.todoItems);
  // }

  viewPendingItems(){
    this.viewOption = viewOptions.Pending
  }

  viewCompletedItems(){
    this.viewOption = viewOptions.Completed
  }

  markCompleted(num: number){
    // console.log(num);
    this.markCompletedEvent.emit(num);
  }

  redoTodo(num: number){
    // console.log(num);
    this.redoTodoEvent.emit(num);
  }

  deleteTodo(num: number){
    console.log(`deleting ${num}`);
    this.deleteTodoEvent.emit(num);
  }
}
