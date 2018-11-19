import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import * as moment from 'moment';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  editedTodo: Todo;

  todos: Todo[];

  currentDate: string;

  navigationSubscription;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initComponent();
      }
    });
   }

  ngOnInit() {
    
  }

  initComponent(){
    let date = this.route.snapshot.paramMap.get('date');
    this.currentDate = date ? date : moment().format("YYYY-MM-DD");
    this.todoService.getTodosByDate(this.currentDate)
      .subscribe(todos => { this.todos = todos })
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  add(): void{
    let title = 'Untitled Todo';
    let do_at = this.currentDate;
    let done  = false;
    let todo: Todo = { title, do_at, done } as Todo;
    this.todoService.addTodo(todo)
      .subscribe(todo => {
        this.todos.push(todo);
        this.editedTodo = todo;
        console.log(todo);
      });
  }

  onDoubleClick(todo: Todo){ this.editedTodo = todo; }

  onCancelEditHandler(todo: Todo){
    this.editedTodo = null;
  }

  onDeleteItemHandler(todo: Todo){
    this.todos = this.todos.filter(h => h !== todo);
    this.todoService.deleteTodo(todo).subscribe();
  }


}
