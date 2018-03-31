import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  toDoList: Array<ToDo> = [];

  addToDo(ToDo) {
    this.toDoList.push({
      name: ToDo.name,
      completed: false
    })
  }

  editToDo() { }

  completeToDo() { }
}

interface ToDo {
  name: string;
  completed: boolean;
}
