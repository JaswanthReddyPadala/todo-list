import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListContainerComponent } from './components/todo-list-container/todo-list-container.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { TodoItemsContainerComponent } from './components/todo-items-container/todo-items-container.component';
import { PendingItemComponent } from './components/pending-item/pending-item.component';
import { CompletedItemsComponent } from './components/completed-items/completed-items.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { FirstLetterCapitalPipe } from './pipes/first-letter-capital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListContainerComponent,
    SearchBarComponent,
    TodoItemsContainerComponent,
    PendingItemComponent,
    CompletedItemsComponent,
    TodoDetailsComponent,
    FirstLetterCapitalPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
