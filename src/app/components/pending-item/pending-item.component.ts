import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// export interface Todo {
//   id:number,
//   description: string,
//   status: string
// }

@Component({
  selector: 'app-pending-item',
  templateUrl: './pending-item.component.html',
  styleUrls: ['./pending-item.component.css']
})
export class PendingItemComponent implements OnInit {

  @Input() item : any;
  
  // @Input() sno : number = 0;
  
  @Output() markCompletedEvent = new EventEmitter<number>();
  constructor() {
   }

  ngOnInit(): void {
  }

  moveTo(num: number) {
    this.markCompletedEvent.emit(num);
  }

}