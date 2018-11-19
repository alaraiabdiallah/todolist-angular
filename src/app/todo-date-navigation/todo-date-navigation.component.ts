import { Component, OnInit, Input } from '@angular/core';
import * as moment from "moment";
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-date-navigation',
  templateUrl: './todo-date-navigation.component.html',
  styleUrls: ['./todo-date-navigation.component.scss']
})
export class TodoDateNavigationComponent implements OnInit {

  @Input() dateContext: string;

  previousDate: any;
  currentDate: any;
  nextDate: any;

  isDateEditable : boolean;

  constructor(private router:Router) { }

  ngOnInit() {
    this.initComponent();
  }
  
  ngOnChanges(){
    this.initComponent();
  }

  initComponent(){
    this.previousDate = moment(this.dateContext).subtract(1, "days");
    this.currentDate = moment(this.dateContext);
    this.nextDate = moment(this.dateContext).add(1, "days");
  }

  onClickDateHandler(){
    this.isDateEditable = true;
  }

  onDateChange(date: string){
    this.isDateEditable = false;
    this.router.navigateByUrl('/todos/'+date);
  }

}
