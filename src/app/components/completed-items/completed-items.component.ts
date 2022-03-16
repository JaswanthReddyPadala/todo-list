import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-completed-items',
  templateUrl: './completed-items.component.html',
  styleUrls: ['./completed-items.component.css']
})
export class CompletedItemsComponent implements OnInit {

  @Input() item : any;

  // @Input() sno : number = 0;

  @Output() redoEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();
  

  constructor() {
    console.log(this.item);
   }

  ngOnInit(): void {
  }

  remove(num: number){
    // console.log(num)
  }
  
  redoTodoItem(num: number){
    this.redoEvent.emit(num);
  }

  deleteTodoItem(num: number){
    // console.log(`deleting ${num}`);
    this.deleteEvent.emit(num);
  }
}