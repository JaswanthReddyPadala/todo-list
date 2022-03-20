import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-pending-item',
  templateUrl: './pending-item.component.html',
  styleUrls: ['./pending-item.component.css']
})


export class PendingItemComponent implements OnInit {

  @Input() item: any;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  moveTo(num: number) {
    this.todoService.markCompletedTodoItem(num);
  }

}