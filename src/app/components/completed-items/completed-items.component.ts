import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-completed-items',
  templateUrl: './completed-items.component.html',
  styleUrls: ['./completed-items.component.css']
})
export class CompletedItemsComponent implements OnInit {

  @Input() item: any;

  constructor(private todoService: TodoService) {
    console.log(this.item);
  }

  ngOnInit(): void {
  }

  redoTodoItem(num: number) {
    this.todoService.redoTodoItem(num);

  }

  deleteTodoItem(num: number) {
    this.todoService.deleteTodoItem(num);


  }
}