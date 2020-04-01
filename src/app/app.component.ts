import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  tasksList = [];
  onTaskCreated(taskName: string) {
    if (taskName) {
      this.tasksList.push(taskName);
    } else {
      alert('You should provide a task name');
    }
  }
}
