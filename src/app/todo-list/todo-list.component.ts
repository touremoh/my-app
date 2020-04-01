import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input() tasks = [];

  constructor() {}

  ngOnInit() {}

  containsTask(): boolean {
    return this.tasks.length > 0;
  }
}
