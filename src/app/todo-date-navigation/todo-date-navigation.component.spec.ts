import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDateNavigationComponent } from './todo-date-navigation.component';

describe('TodoDateNavigationComponent', () => {
  let component: TodoDateNavigationComponent;
  let fixture: ComponentFixture<TodoDateNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDateNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
