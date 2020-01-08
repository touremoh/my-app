import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private name = "";
  private tasks = [];

  constructor() {}

  ngOnInit() {}

  containsTask() : boolean {
    return this.tasks.length > 0;
  }

  addNewTask() {
    if (this.name.length > 0) {
      this.tasks.push(this.name);
    }
  }

}
