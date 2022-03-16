import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export enum todoStatus {
  Pending="Pending",
  Completed="Completed"
}

export interface Todo {
  id:number,
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
  
  @Output() newTodoEvent = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    let newTodoItem = {} as Todo;
    newTodoItem.id = this.id;
    this.id+=1;
    
    newTodoItem.description = this.description;
    this.description = "";

    newTodoItem.status = todoStatus.Pending;

    this.newTodoEvent.emit(newTodoItem);
  }

}
