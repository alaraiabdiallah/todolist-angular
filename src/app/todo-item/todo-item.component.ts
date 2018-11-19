import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, OnChanges {
  
  @Input() todo: Todo;
  @Input() edited: boolean;
  @Output() onCancelEditItem = new EventEmitter<Todo>();
  @Output() onDeleteItem = new EventEmitter<Todo>();
  @ViewChild('todoTitle') todoTitleElement: ElementRef;
  
  constructor(private todoService: TodoService) {}
  
  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    const edited: SimpleChange = changes.edited;
    if (edited.currentValue) {
      setTimeout(() => {
        this.todoTitleElement.nativeElement.focus();
      }, 0);
    }
  }

  save(title: string){
    this.edited = false;
    this.onCancelEditItem.emit(null);
    this.todo.title = title;
    this.todoService.updateTodo(this.todo).subscribe();
  }

  deleteTodo(todo: Todo){
    this.onDeleteItem.emit(todo);
  }

  setDone(todo: Todo){
    this.todo.done = todo.done? false: true;
    this.todoService.updateTodo(this.todo).subscribe();
  }

  onCancelEdit(todo: Todo){
    this.edited = false;
    this.onCancelEditItem.emit(todo);
  }

}
