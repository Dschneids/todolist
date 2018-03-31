import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  toDoList: Array<ToDo> = [];
}

interface ToDo {
  name: string;
  completed: boolean;
}
