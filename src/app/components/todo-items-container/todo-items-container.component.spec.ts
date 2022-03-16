import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemsContainerComponent } from './todo-items-container.component';

describe('TodoItemsContainerComponent', () => {
  let component: TodoItemsContainerComponent;
  let fixture: ComponentFixture<TodoItemsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
