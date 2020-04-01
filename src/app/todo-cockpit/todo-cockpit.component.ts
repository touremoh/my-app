import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-cockpit',
  templateUrl: './todo-cockpit.component.html',
  styleUrls: ['./todo-cockpit.component.css']
})
export class TodoCockpitComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output() taskCreated = new EventEmitter<string>();
  name = '';
  constructor() { }

  ngOnInit() {
  }

  onNewTodoItemAdd() {
    this.taskCreated.emit(this.name);
  }
}
